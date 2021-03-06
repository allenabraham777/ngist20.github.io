//Json Object
var data = [
	{
		time: '2019-03-01',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Call for Papers Announcement',
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
		time: '2019-05-01',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Draft Paper Submission',
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
		time: '2019-07-01',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Notification of Acceptance',
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
		time: '2019-07-15',
		body: [{
			tag: 'h3',
			content: '',
			attr: {
				cssclass: 'group-title'
			}
		},
		{
			tag: 'span',
			content: 'Final Camera-ready Paper',
			attr: {
				cssclass: 'group-sub-title'
			}
		},
		{
			tag: 'p',
			content: ''
		}]
	}/*,
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
	}*/];

$(document).ready(function () {

	$('#myTimeline').albeTimeline(data);

});