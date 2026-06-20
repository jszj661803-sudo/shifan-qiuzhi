const jobs = [
  {"city":"南京","source":"南京市教育局","title":"2026年1月公开招聘教师报名系统","date":"2026-01-15","url":"http://www.njzb.org/"},
  {"city":"南京","source":"南京市教育局","title":"2026年南京市教育系统专项招聘复硕培养试点毕业生公告","date":"2026-06-16","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202606/t20260616_5860306.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市教育局所属事业单位2026年统一公开招聘工作人员成绩公布","date":"2026-06-10","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202606/t20260610_5855476.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市教育系统部分事业单位2025年11月公开招聘教师拟聘用人员名单公示（三）","date":"2026-06-08","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202606/t20260608_5853960.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市教育局所属事业单位2026年公开招聘进入面试人员名单","date":"2026-05-27","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202605/t20260527_5847229.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市教育系统部分事业单位2025年11月公开招聘教师拟聘用人员名单公示（二）","date":"2026-03-26","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202603/t20260326_5812978.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市2026年事业单位统一公开招聘工作人员公告","date":"2026-03-18","url":"https://rsj.nanjing.gov.cn/njsrlzyhshbzj/202603/t20260318_5807842.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市教育系统部分事业单位2025年11月公开招聘教师拟聘用人员名单公示（一）","date":"2026-02-02","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202602/t20260202_5785091.html"},
  {"city":"南京","source":"南京市教育局","title":"关于南京市教育局直属学校2026年1月公开招聘教师部分岗位取消、核减招聘计划的公告","date":"2026-01-21","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260121_5775038.html"},
  {"city":"南京","source":"南京市教育局","title":"南京江北新区2026年1月公开招聘教师公告","date":"2026-01-09","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260109_5762078.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市溧水区教育局所属事业单位2026年1月公开招聘教师公告","date":"2026-01-09","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260109_5762008.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市雨花台区教育局所属学校2026年公开招聘教师公告","date":"2026-01-09","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260109_5761809.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市玄武区教育局所属学校2026年公开招聘教师公告","date":"2026-01-09","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260109_5761685.html"},
  {"city":"南京","source":"南京市教育局","title":"2026年南京市六合区教育局所属事业单位公开招聘教师公告","date":"2026-01-08","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260108_5759945.html"},
  {"city":"南京","source":"南京市教育局","title":"南京市建邺区教育局所属学校2026年公开招聘教师公告","date":"2026-01-09","url":"https://edu.nanjing.gov.cn/bsfw/zpzk/202601/t20260109_5761561.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师体检公告（三）","date":"2026-06-11","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0611/114459.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师签约及职业素养测试公告","date":"2026-06-02","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0602/114451.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师体检公告（二）","date":"2026-05-27","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0527/114447.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师体检公告（一）","date":"2026-05-11","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0511/114427.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校"优才计划"公开招聘教师体检公告（三）","date":"2026-05-11","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0511/114426.html"},
  {"city":"常州","source":"常州市教育局","title":"关于公布2026年常州市教育局直属学校公开招聘教师资格复审通过人员名单的公告","date":"2026-04-28","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0428/114421.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师专业技能测试成绩查询及后续有关事项","date":"2026-04-20","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0420/114413.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师相关岗位专业技能测试公告","date":"2026-04-10","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0410/114409.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校公开招聘教师笔试成绩查询及后续有关事项的公告","date":"2026-04-07","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0407/114407.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州幼儿师范高等专科学校公开招聘教师公告","date":"2026-04-07","url":"https://rsj.changzhou.gov.cn/html/czrsj/2026/IQCNPLQO_0407/49697.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校"优才计划"公开招聘教师体检公告（二）","date":"2026-03-25","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0325/114396.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育局直属学校"优才计划"公开招聘教师体检公告（一）","date":"2026-03-11","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0311/114379.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育系统公开招聘教师公告","date":"2026-03-05","url":"https://jyj.changzhou.gov.cn/html/jyj/2026/QFJEPCBL_0305/114368.html"},
  {"city":"常州","source":"常州市教育局","title":"2026年常州市教育系统"优才计划"公开招聘教师公告","date":"2026-01-08","url":"https://rsj.changzhou.gov.cn/html/czrsj/2026/IQCNPLQO_0108/49591.html"},
  {"city":"南通","source":"南通市教育局","title":"[政策解读]2026年度高中、中职教师资格认定常... [04-22]","date":"2026-05-09","url":"https://jyj.nantong.gov.cn/ntsjyj/zcjd/content/e931320d-ae06-4721-94e9-f95798d1d654.html"},
  {"city":"南通","source":"南通市教育局","title":"我市2026年上半年中小学教师资格考试...  05-18","date":"","url":"https://jyj.nantong.gov.cn/ntsjyj/bmdt/content/c66a9499-2a60-4a65-b6b9-a1256e53e1d3.html"},
  {"city":"南通","source":"南通市教育局","title":"2026年第一批高级中学教师、中等职业...  05-26","date":"","url":"https://jyj.nantong.gov.cn/ntsjyj/gggs/content/e7b05507-4a5e-4db6-ba82-d7138de0c45c.html"},
  {"city":"南通","source":"南通市教育局","title":"南通市2026年上半年面向社会认定高级中学、中等职业学校教师（含实习指导教师）资格公告","date":"2026-05-09","url":"https://jyj.nantong.gov.cn/ntsjyj/gggs/content/f428c41c-da80-4023-b8a7-e539319e048f.html"},
  {"city":"南通","source":"南通市教育局","title":"2026年春季南通市教育局部分直属学校公开招聘教师报名入口","date":"2026-05-09","url":"https://wsbm.rsj.nantong.gov.cn/Home/ExamHome?examid=06260403155845"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市教育局2025年第一批教师资格认定通过人员名单公示","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202506/0cfa8049178542e5b4621c730757a77a.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江高等职业技术学校2025年公开招聘教师公告","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202506/0939b55aac0741b3b603145db4bd2bf3.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市直教育系统2025年教师招聘面试成绩及总成绩公告（第一批）","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202506/4ad1d49bdc4d458d927d8d084cc3fe38.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市2025年中小学教师资格第二次认定公告","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202506/680754c9199a485ca28e955c4a12f525.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"全国县域普通高中头雁教师岗位计划镇江市拟推荐人选名单公示","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202506/a7253f793904470db6a2909da8794324.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市直教育系统2025年教师招聘通过资格复审人员名单","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202505/5e5d09a8960e40a3ae1c08e3f8111774.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市直教育系统2025年教师招聘资格复审公告","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202505/0ebd5d5097924d2b8716cba10f7f0290.shtml"},
  {"city":"镇江","source":"镇江市教育局","title":"镇江市船山学校71号岗位2025年集中公开招聘工作人员《岗位专业知识》笔试成绩公告","date":"2025-06-13","url":"https://jyj.zhenjiang.gov.cn/jyj/tzgg/202504/5e0448ed34bb4e81aac419ee1685e420.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年上半年无锡市高中、中职和中职实习指导教师资格认定结果（第一次）暨领证的通知","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/06/11/4789769.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026无锡市教育局直属学校银龄教师招募公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/06/02/4785025.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年无锡市教育局直属学校公开招聘教师（二）面试成绩及体检公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/05/10/4773003.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年无锡市教育局直属学校公开招聘教师（二）面试递补人员名单公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/05/09/4772896.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2025年无锡市教育局直属单位公开招聘教师（三）拟录用人员名单公示（八）","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/04/30/4769382.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年无锡市教育局直属学校公开招聘教师（二）笔试成绩及面试公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/04/26/4765292.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年无锡市教育局直属学校公开招聘教师（二）笔试公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/04/20/4762268.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年上半年无锡市高中、中职和中职实习指导教师资格认定公告","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/04/14/4759435.shtml"},
  {"city":"无锡","source":"无锡市教育局","title":"2026年无锡市教育局直属学校公开招聘教师公告（二）","date":"2026-06-15","url":"https://jy.wuxi.gov.cn/doc/2026/04/08/4756444.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市2026年第二次面向社会认定高中、中职、中职实习指导教师资格公告","date":"2026-06-03","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202606/60d42c32322249ddb1c2362c3bdb1b1e.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员进入面试人员名单公告（苏州建设交通高等职业技术学校考点）","date":"2026-06-01","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202606/d804960a136f4db6968fe1f3fe32c896.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员面试及总成绩公示（苏州高等职业技术学校考点）","date":"2026-06-01","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202606/8a62025be72f42eb916a9bb1f07decd1.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员面试及总成绩公示（苏州市教师发展学院考点）","date":"2026-06-01","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202606/38addc1fb3b04974a7f287cc09bce5f6.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘高层次优秀毕业生公告","date":"2026-05-28","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202605/440e2d43bd4d46bcb378f7e035528725.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育系统2026年公开招聘中小学体育教练员公告","date":"2026-05-26","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202605/95b8d716b6a843ab8731eaa5efa6fc19.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员进入面试人员名单公告（苏州高等职业技术学校考点）","date":"2026-05-26","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202605/65e99b29b02b4ebfaeb5595ae0ee5cbc.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员进入面试人员名单公告（苏州市教师发展学院考点）","date":"2026-05-26","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202605/b0b10b36aa7246b38c1981915605e442.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员资格复审及面试公告","date":"2026-05-22","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202605/f310665d38324c038e9b775147bde3ad.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员笔试成绩查询","date":"2026-05-20","url":"http://exam1.szrc.cn/PublicWeb/Pages/Public/QueryScore.aspx"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员公告","date":"2026-04-22","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202604/58a86e82aecb492db66bcfc37c85e0ff.shtml"},
  {"city":"苏州","source":"苏州市教育局","title":"苏州市教育局直属学校2026年公开招聘教师和专职辅导员有关岗位相近专业审核情况（4月29日）","date":"2026-04-29","url":"https://jyj.suzhou.gov.cn/szjyj/gsgg/202604/daf3214a6d034e73a8975374c3b212ed.shtml"},
  {"city":"扬州","source":"扬州市教育局","title":"2026年扬州市市属事业单位统一公开招聘工作人员体检名单","date":"2026-06-18","url":"https://hrss.yangzhou.gov.cn/ztzl/zlzp/art/2026/art_10a4b00b395d4938870d4fa922089ac6.html"},
  {"city":"扬州","source":"扬州市教育局","title":"2026年扬州市第一批面向社会认定高级中学、中等职业学校、中等职业学校实习指导教师资格通过人员名单","date":"2026-06-18","url":"https://jyj.yangzhou.gov.cn/zfxxgk/fdzdgknr/tzgg/art/2026/art_bdeb7f01079a49a68bed70a6c87b7ce6.html"},
  {"city":"扬州","source":"扬州市教育局","title":"2026年扬州市市属事业单位统一公开招聘工作人员面试公告","date":"2026-06-18","url":"https://hrss.yangzhou.gov.cn/ztzl/zlzp/art/2026/art_606a054c02dd4e3fad55a136278b9e17.html"},
  {"city":"扬州","source":"扬州市教育局","title":"以教育家精神铸魂强师，谱写教育强国建设华章——优秀教师风采展","date":"2026-06-15","url":"https://jyj.yangzhou.gov.cn/jyzx/jyzt/art/2025/art_9887e4d76da54ff699cbfca455b2ba1a.html"},
  {"city":"泰州","source":"泰州市教育局","title":"泰州市2026年第一次高中阶段教师资格认定通过人员名单公布","date":"2026-01-15","url":"https://jyj.taizhou.gov.cn/gsgg/art/2026/art_ff4f1d5e9c094996bd13096053c9f771.html"},
  {"city":"泰州","source":"泰州市教育局","title":"泰州市教育局直属学校2026年公开招聘教师体检公告","date":"2026-01-15","url":"https://jyj.taizhou.gov.cn/gsgg/art/2026/art_432555827a354bf08ec4bbf2d2dd463b.html"},
  {"city":"泰州","source":"泰州市教育局","title":"泰州市教育局直属学校2026年公开招聘教师面试成绩及总成绩公布","date":"2026-01-15","url":"https://jyj.taizhou.gov.cn/gsgg/art/2026/art_b8dbab55386a4478803dbb7cd7e1b5a1.html"},
  {"city":"泰州","source":"泰州市教育局","title":"泰州市教育局直属学校2026年公开招聘教师资格复审及面试相关事项公告","date":"2026-01-15","url":"https://jyj.taizhou.gov.cn/gsgg/art/2026/art_ca281e4e96d64e00a108b1df412b2d30.html"}
];

let currentFilter = '全部';

function renderJobs() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('jobsGrid');
  const noResults = document.getElementById('noResults');
  
  const filtered = jobs.filter(function(job) {
    var matchCity = currentFilter === '全部' || job.city === currentFilter;
    var matchSearch = !search || 
      job.title.toLowerCase().indexOf(search) !== -1 ||
      job.city.toLowerCase().indexOf(search) !== -1 ||
      job.source.toLowerCase().indexOf(search) !== -1;
    return matchCity && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var job = filtered[i];
    html += '<div class="job-card" onclick="window.open(\'' + job.url + '\', \'_blank\')">';
    html += '<span class="city city-' + job.city + '">' + job.city + '</span>';
    html += '<h3>' + job.title + '</h3>';
    html += '<div class="meta">';
    html += '<span class="source">📍 ' + job.source + '</span>';
    if (job.date) {
      html += '<span class="date">📅 ' + job.date + '</span>';
    }
    html += '</div></div>';
  }
  grid.innerHTML = html;
}

function updateStats() {
  document.getElementById('totalCount').textContent = jobs.length;
  var cities = {};
  for (var i = 0; i < jobs.length; i++) { cities[jobs[i].city] = true; }
  document.getElementById('cityCount').textContent = Object.keys(cities).length;
  var dates = [];
  for (var i = 0; i < jobs.length; i++) { if (jobs[i].date) dates.push(jobs[i].date); }
  dates.sort().reverse();
  document.getElementById('latestDate').textContent = dates.length ? dates[0] : '-';
}

document.getElementById('searchInput').addEventListener('input', renderJobs);

document.getElementById('filters').addEventListener('click', function(e) {
  if (e.target.classList.contains('filter-btn')) {
    var btns = document.querySelectorAll('.filter-btn');
    for (var j = 0; j < btns.length; j++) btns[j].classList.remove('active');
    e.target.classList.add('active');
    currentFilter = e.target.getAttribute('data-city');
    renderJobs();
  }
});

updateStats();
renderJobs();