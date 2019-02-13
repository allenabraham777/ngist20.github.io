//Json Object
var data = [
	{
		time: '2018-04-30',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Last date for full paper submission',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	},

	{
		time: '2018-06-06',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Intimation of acceptance',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2018-06-30',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Last date of camera ready paper submission',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2018-06-15',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Last date for registration',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2018-07-19',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Event starts',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2018-07-20',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Event ends',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	}];

$(document).ready(function () {

	$('#myTimeline').albeTimeline(data);

});