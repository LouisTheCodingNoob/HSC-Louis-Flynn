//literal notation
/*
var pageInfo = {
	title: 'Case Studies',
	description: 'This page details different case studies for Princiled Software Solutions.',
	caseStudies: ['MapAuthority', 'Do it Best'],
	caseStudyCount: function () {
		return this.caseStudies.length;
	}
};
*/

// constructor notation

var pageInfo = new Object();

pageInfo.title = 'Case Studies';
pageInfo.description = 'Principled Software Solutions Case Studies';
pageInfo.caseStudies = ['MapAuthority', 'Do it Best'];
pageInfo.caseStudyCount = function () {
	return this.caseStudies.length;
};

var pageTitle = pageInfo.title;
var caseStudyCount = pageInfo.caseStudyCount();

console.log('The ' + pageTitle + ' page contains ' + caseStudyCount + ' case studies.');


pageInfo.caseStudies = ['MapAuthority', 'Do it Best','HSC'];
caseStudyCount = pageInfo.caseStudyCount();
console.log('The ' + pageTitle + ' page contains ' +caseStudyCount + ' case studies.');

pageInfo['title'] = 'A new title';

console.log(pageInfo.title);

delete pageInfo.title;
console.log(pageInfo.title);