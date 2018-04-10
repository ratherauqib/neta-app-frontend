interface Scripts {
	name: string,
	src: string
}

export const ScriptStore: Scripts[] = [
	{name: 'selectize', src: './../../../assets/js/selectize.min.js'},
	{name: 'quickblox', src:'https://cdnjs.cloudflare.com/ajax/libs/quickblox/2.5.4/quickblox.min.js'},
	{name: 'filepicker', src: 'https://static.filestackapi.com/v3/filestack.js'},
	{name: 'jquery', src:'https://code.jquery.com/jquery-3.2.1.min.js'},
	{name: 'datatables', src: 'https://cdn.datatables.net/v/dt/dt-1.10.12/datatables.min.js'},
	{name: 'material', src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js'},
	{name: 'auth2',src:'https://apis.google.com/js/platform.js'},
	{name: 'facebook', src: 'https://connect.facebook.net/en_US/sdk.js'},
	{name:'moment',src:'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js'},
	{name: 'calendar', src: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js'},
	{name: 'iframe-api', src: 'https://www.youtube.com/iframe_api'}
];