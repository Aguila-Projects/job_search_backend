import { CompanyPaths } from '@interfaces/IUtilsCompanyList';

const companyPaths: CompanyPaths = {
  caci: {
    basePath: 'caci/External/jobs',
    wdNum: 'wd1',
    frontendUri: 'https://caci.wd1.myworkdayjobs.com/External/',
    buttonSelector: '.css-shvw01',
  },
  bah: {
    basePath: 'bah/BAH_Jobs/jobs',
    wdNum: 'wd1',
    frontendUri: 'https://bah.wd1.myworkdayjobs.com/BAH_Jobs',
    buttonSelector: '.css-1rgftiz',
  },
  accenture: {
    basePath: 'accenture/AccentureCareers/jobs',
    wdNum: 'wd3',
    frontendUri: 'https://accenture.wd3.myworkdayjobs.com/AccentureCareers/',
    buttonSelector: '.css-shvw01',
    locationRadio: '.css-n9nn59',
  },
  nvidia: {
    basePath: 'nvidia/NVIDIAExternalCareerSite/jobs',
    wdNum: 'wd5',
    frontendUri:
      'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/',
    buttonSelector: '.css-shvw01',
  },
};

export default companyPaths;