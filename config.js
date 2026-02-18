// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Edmund',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ae1258378216521f5fa6f9051ab1ef21', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-33.801245',
	defaultLongitude: '151.126639',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'Sentral',
			icon: 'trello',
			link: 'https://fortstreeths.sentral.com.au/s-068p65/portal/#!/student/3894',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'VScode',
			icon: 'glasses',
			link: 'https://cs50.dev',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'MyUNSW',
					link: 'https://my.unsw.edu.au/portal/portal/student.xml?ticket=ST-210198-gs3YJ3SuX82l13X8nLC1klq-pd4-infplcas103',
				},
				{
					name: 'Moodle',
					link: 'https://moodle.telt.unsw.edu.au/my/',
				},
				{
					name: 'Google Drive',
					link: 'https://drive.google.com/drive/my-drive',
				},
				{
					name: 'Google Docs',
					link: 'https://docs.google.com',
				},
			],
		},
		{
			icon: 'wrench',
			id: '2',
			links: [
				{
					name: 'Mathsolver',
					link: 'https://mathsolver.microsoft.com/en',
				},
				{
					name: 'Desmos',
					link: 'https://www.desmos.com/calculator',
				},
				{
					name: 'Atomi',
					link: 'https://learn.getatomi.com/subscriptions/254000/classes',
				},
				{
					name: 'New Tab',
					link: 'edge://newtab',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'book-marked',
			id: '1',
			links: [
				{
					name: 'Notion',
					link: 'https://www.notion.so/Edmund-s-School-a31dc320361843269e8fc9b5c78d0dd6',
				},
				{
					name: 'Matrix',
					link: 'https://my.matrix.edu.au/',
				},
				{
					name: 'Sentral',
					link: 'https://fortstreeths.sentral.com.au/s-068p65/portal/#!/student/3894',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Google',
					link: 'https://google.com',
				},
				{
					name: 'Github',
					link: 'https://github.com',
				},
				{
					name: 'VScode',
					link: 'https://cs50.dev/',
				},
				{
					name: 'COMP1511',
					link: 'https://cgi.cse.unsw.edu.au/~cs1511/current/',
				},
			],
		},
	],
};
