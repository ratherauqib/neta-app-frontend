import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../../../shared/services/location.service';
@Component({
  selector: 'location-detector',
  templateUrl: './location-detector.component.html'
})
export class LocationDetectorComponent {
  geolocationPosition;
  loading = true;
  s_state: { id: string, name: string,isSelected:boolean }
  s_cons: { id: string, name: string,isSelected:boolean };
  s_assembly: { id: string, name: string,isSelected:boolean };

  states:[{id:string,name:string,isSelected:boolean}]
  cons:any[];
  assembly:[{id:string,name:string,isSelected:boolean}];



  @Output("ids") C_ID = new EventEmitter<{}>();

  constructor(private Address: LocationService) { }



  showData(res) {
    let address = res.data;

    let constituency = this.findObjectByKey(address.parliament, 'id', address.selected.parliamentary_id);
    let assembly = this.findObjectByKey(constituency.assembly, 'id', address.selected.assembly_id);
    console.log(constituency);
    console.log(this.s_assembly)

   // this.states.push({ name: address.name, id: address.id,isSelected:true });
    this.cons.push({ name: constituency.name, id: constituency.id,isSelected:true });
    //this.assembly.push({ name: assembly.name, id: assembly.id,isSelected:true });
  }
  findObjectByKey(array, key, value) {
    for (let o of array) {
      if (o[key] === value)
        return o;
    }
    return null;
  }
  next() {

    this.C_ID.emit({ c_id: this.s_cons.id, a_id: this.s_assembly.id });//send cons and assembly id to parent component;
  }


  getConstituencies(a) {
    console.log("option sected", a);
    this.Address.getConstituencies(this.s_state.id).subscribe(res=>{
      console.log(res.data.parliament);//got constituencies
      this.cons=res.data.parliament;
    })
}
selectedConstituency(id){
  this.s_cons=null;
  console.log("i am selected option",id);
//  this.Address.getAssemblies();
}
getAssemblies(){

}

  getLocation() {
    if (window.navigator && window.navigator.geolocation) {
      this.loading = true;
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            console.log(position);
          this.Address.getCurrentAddress(position.coords.latitude, position.coords.longitude)
            .subscribe(res => { this.showData(res) });
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;

          }
          this.loading = false;
        }
      );
    };
  }

}


