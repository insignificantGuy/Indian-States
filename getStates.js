const cheerio = require("cheerio");
const axios = require("axios");

const url = 'https://www.careerpower.in/states-and-capitals-of-india.html';

async function getStates () {
	const { data } =  await axios.get(url);
	const $=cheerio.load(data);
	const states = [];
	const tx = $('#middle > div:nth-child(9) > table');
	tx.find('tbody tr').slice(1).each((i,element)=>{
		const $row= $(element);
		const state={};
		const labels=[
			'No',
			'State',
			'Administrative_Capital',
			'Year_of_Establishment'
		];
		$row.find('td').each((i,element)=>{
			const $col= $(element);
			const labelNo = labels[i];
			state[labelNo] = $col.text().trim();
		})
		states.push(state);
	});
	return states;
};

getStates();

module.exports = getStates;