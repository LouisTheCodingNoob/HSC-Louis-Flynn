//literal notation

var pageInfo = {
	title: 'Case Studies',
	description: 'This page details different case studies for Principled Software Solutions.',
	caseStudies: [
		{
			title: 'MapAuthority',
			description: 'I partnered with Redesigned Retail to embark on a two year project to build a website designed to allow suppliers to monitor and enforce Amazon pricing among their retailers. As the sole developer, I built the entire site from the ground up, including setting up the full end-to-end cloud architecture. The result was a robust, scalable solution that met the client\'s needs and exceeded their expectations.',
			quote: '"Matt delivered an exceptional product that exceeded our expectations. His ability to bridge the gap between stakeholders like myself and the complexities of technology is truly unparalleled." - Kyle H., Owner of Redesigned Retail and MapAuthority',
			hasQuote: true,
			technologiesLearned: ['C#', 'NET Core', 'Vue 3']
		},
		{
			title: 'Do it Best - Rebate Team',
			description: 'The Rebate Team was one of the largest and most collaborative development teams at Do it Best, consisting of eight developers (myself included), a UI/UX engineer, a business analyst, and finance stakeholders. Over the course of six months, we worked closely with the finance team to design and develop a robust application for calculating and managing member store rebates. The application was successfully delivered on time and within budget, meeting all stakeholder expectations. Additionally, the Rebate Team was recognized for its exceptional collaboration and performance, earning the highest developer satisfaction rating among all teams at Do it Best. This experience not only showcased my ability to work effectively within a large, cross-functional team but also reinforced the importance of aligning technical solutions with business needs to drive impactful results.',
			hasQuote: false,
			technologiesLearned: ['c#', '.NET Core', 'Aurelia']
		}
	],
	caseStudyCount: function () {
		return this.caseStudies.length;
	}
};

// Document Object Model

var pageBreak = '<br><br>';
var header = document.getElementById('header');
var paragraph = document.getElementById('paragraph');
var div = document.getElementById('div');

header.textContent = pageInfo.title;
paragraph.textContent = pageInfo.description;

// 1st case study

div.innerHTML = pageInfo.caseStudies[0].title;
div.innerHTML += pageBreak + pageInfo.caseStudies[0].description;

if (pageInfo.caseStudies[0].hasQuote) {
	div.innerHTML += pageBreak + pageInfo.caseStudies[0].quote;
}

div.innerHTML += pageBreak + 'Technologies Learned: ' + pageInfo.caseStudies[0].technologiesLearned[0] + ', ' + pageInfo.caseStudies[0].technologiesLearned[1] + ', ' + 
pageInfo.caseStudies[0].technologiesLearned[2];

// 2nd case study

div.innerHTML += pageBreak + pageInfo.caseStudies[1].title;
div.innerHTML += pageBreak + pageInfo.caseStudies[1].description;

if (pageInfo.caseStudies[1].hasQuote) {
	div.innerHTML += pageBreak + pageInfo.caseStudies[1].quote;
}

div.innerHTML += pageBreak + 'Technologies Learned: ' + pageInfo.caseStudies[1].technologiesLearned[0] + ', ' + pageInfo.caseStudies[1].technologiesLearned[1] + ', ' + 
pageInfo.caseStudies[1].technologiesLearned[2];

// browser object Model

console.log('The current screen width is ' + window.screen.width);
//window.open('https://principledsoftware.net');
//window.alert('hello world');

//Global Objects

header.textContent = pageInfo.title.toUpperCase();

var number = 10.2366;

div.innerHTML += pageBreak + number;
div.innerHTML += pageBreak + number.toFixed(2);

var pi = Math.PI;
div.innerHTML += pageBreak + pi;

var today = new Date();

div.innerHTML += pageBreak + 'copyright ' + today.getFullYear();