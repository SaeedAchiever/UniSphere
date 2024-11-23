import distanceData from '../University/json/distance.json'
import universityData from '../University/universities.json'
import entryRequirementData from '../University/json/entry_req.json';
import facultyData from '../University/json/faculty.json';
import faqData from '../University/json/faq.json';

export const mergeUniversityData = () => {
  return uniData.map(uni => {
    const distanceInfo = distanceData.find(d => d.university_id === uni.id);
    const entryRequirementInfo = entryRequirementData.find(e => e.university_id === uni.id);
    const facultyInfo = facultyData.find(f => f.university_id === uni.id);
    const faqInfo = faqData.find(faq => faq.university_id === uni.id);

    return {
      ...uni,
      distance: distanceInfo || {},
      entryRequirements: entryRequirementInfo || {},
      faculties: facultyInfo || {},
      faqs: faqInfo || {}
    };
  });
};
