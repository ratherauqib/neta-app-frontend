export interface Candidate {
    candidate_id:string,
    candidate_name:string,
    candidate_profile_pic: { 
        cloudinary: {
                public_id:string,
            }
    },
    candidature_constituency_id:string,
    candidature_id:string,
    constituency_name:string,
    declared_candidate:boolean,
    has_cover:boolean,
    is_party_leader:boolean,
    is_voted_by_me:boolean,
    label:'',
    party: { 
        name: string, 
        image: {
            cloudinary:{
                public_id:string, 
            }
         },
        abbreviation: string 
    }
    party_abbreviation:string,
    party_image:{ 
        cloudinary: 
        { 
            public_id:string,
        } 
    },
    percentage:number,
    votes:number
}