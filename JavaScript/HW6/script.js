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

var pageBreak = '<br><br>';
var header = document.getElementById('header');
var paragraph = document.getElementById('paragraph');
var div = document.getElementById('div');
var count = pageInfo.caseStudyCount();

header.textContent = pageInfo.title;
paragraph.textContent = pageInfo.description;

/*for (var i = 0; i < count; i++) 
{
*/

var i = 0;
while (i < count) {


		div.innerHTML += pageBreak + pageInfo.caseStudies[i].title;
		div.innerHTML += pageBreak + pageInfo.caseStudies[i].description;
		
	if (pageInfo.caseStudies[i].hasQuote === true) {
		div.innerHTML += pageBreak + pageInfo.caseStudies[i].quote;
	}

	div.innerHTML += pageBreak + 'Technologies Learned: ';

	var x = 0;
	do {
		div.innerHTML += pageInfo.caseStudies[i].technologiesLearned[x] + ', ';

		x++;

	} while (x < pageInfo.caseStudies[i].technologiesLearned.length);

	i++;
}