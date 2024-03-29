// secondary/pages/editResume/index.js
var city = require('../../../utils/city');
const app = getApp()
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min');
const qqMapSdk = new QQMapWX({
  key: 'ABNBZ-GKPLS-FOAOJ-6HOP3-GAWZO-NNFDH'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain: app.domain + '/img/chef/',
    domains: app.domain + '/img/chefs/',
    basic: {},
    job_expectation: [],
    educational: [],
    work_experience: [],
    show: false,
    maskType: 0,
    // 个人信息
    year: '',
    month: '',
    avatar: '',
    name: '',
    sex: '编辑性别',
    born: '编辑出生年月',
    isStudent: '编辑身份类型',
    isStudentCode: 0,
    workTime: '编辑参加工作时间',
    phone: '',
    phonePlaceholder: '编辑手机号',
    phonePlaceholderClass: 'placeholder',
    sourceType: [
      'camera', 'album'
    ],
    sexArray: [
      '男', '女'
    ],
    sexIndex: 0,
    studentArray: ['在校生', '应届生', '职员'],
    studentIndex: 0,
    disabled: true,
    // 地址
    show_ani: '',
    addressArr: [],
    showview: '1',
    provinces: '',
    city: '',
    area: '',
    workAddress: '',
    fullAddress: '',
    longitude: '',
    latitude: '',
    provincess: '',
    citys: '',
    areas: '',
    workAddresss: '',
    fullAddresss: '',
    longitudes: '',
    latitudes: '',
    address: '编辑居住地址',
    active2: '',
    // 个人优势
    areaf: false,
    areaVal: '',
    areaWords: 0,
    // 求职期望
    je_id: 0,
    fullOrPart: 1,
    addOrEdit: 0,
    city: '选择地址',
    citycode: '',
    expectJob: '选择职位',
    expectJobId: 0,
    expectJobArray: [],
    expectJobIndex: 0,
    position: [],
    salaryArray: [
      ['面议', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000'],
      ['面议']
    ],
    salaryArrays: [
      ['面议', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000'],
      ['面议', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000', '35000']
    ],
    salaryIndex: [0, 0],
    salaryMin: '',
    salaryMax: '',
    // 求职状态
    stateJobIndex: 0,
    stateJobArray: [],
    stateJob: [],
    jobState: '编辑求职状态',
    jobStateId: '',
    // 教育经历
    ee_id: 0,
    addOrEdit2: 0,
    school: '',
    educationalIndex: [0, 0],
    educationalArray: [],
    educationals: [],
    education: '',
    educationId: 0,
    fullPart: '',
    fullPartId: 0,
    major: '',
    timeRangeIndex: [0, 2],
    timeRangeArray: [
      [],
      []
    ],
    timeRanges: [],
    timeRangeL: '',
    timeRangeR: '',
    schoolExperience: '',
    // 工作经历
    we_id: 0,
    addOrEdit3: 0,
    company: '',
    entryTime: '入职时间',
    departureTime: '至今',
    jobTitle: '请选择',
    jobTitleId: 0,
    jobTitleIndex: 0,
    jobTitleArray: [],
    jobDuties: '',
  },
  openMask(e) {
    var item = e.currentTarget.dataset.item
    var basic = this.data.basic
    this.setData({
      show: true,
      maskType: item
    })
    if (this.data.maskType == 1) {
      this.setData({
        avatar: basic.r_head_portrait ? basic.r_head_portrait : '',
        name: basic.r_name ? basic.r_name : '',
        sex: basic.r_sex ? basic.r_sex : '编辑性别',
        born: basic.r_born ? basic.r_born : '编辑出生年月',
        studentIndex: basic.r_work_role,
        disabled: basic.r_work_role < 3 ? true : false,
        isStudent: basic.r_work_role == 1 ? '在校生' : basic.r_work_role == 2 ? '应届生' : '职工',
        isStudentCode: basic.r_work_role,
        workTime: basic.r_working_time ? basic.r_working_time : '编辑参加工作时间',
        phone: basic.r_mobile ? basic.r_mobile : '',
        sexIndex: basic.r_sex == '男' ? 0 : 1,
      })
    } else if (this.data.maskType == 2) {
      this.setData({
        areaf: true,
        areaVal: basic.r_advantage ? basic.r_advantage : '',
        areaWords: basic.r_advantage.length
      })
    } else if (this.data.maskType == 3) {
      var addOrEdit = e.currentTarget.dataset.addoredit
      this.setData({
        addOrEdit: addOrEdit
      })
      if (addOrEdit == 1) {
        this.setData({
          je_id: 0,
          fullOrPart: 1,
          city: '选择地址',
          citycode: '',
          expectJob: '选择职位',
          expectJobId: 0,
          expectJobIndex: 0,
          salaryArray: [
            ['面议', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000'],
            ['面议']
          ],
          salaryIndex: [0, 0],
          salaryMin: '',
          salaryMax: '',
        })
      } else {
        var job = this.data.job_expectation[e.currentTarget.dataset.index]
        var minIndex = this.data.salaryArrays[0].indexOf(job.je_job_salary_min)
        var salaryArrays = JSON.parse(JSON.stringify(this.data.salaryArrays))
        salaryArrays[1].splice(0, minIndex)
        var je_job_location = ''
        city.cityList().forEach(i => {
          if (i.cityInfo.find(j => j.code == job.je_job_location + '00')) {
            je_job_location = i.cityInfo.find(j => j.code == job.je_job_location + '00').city
          }
        })
        this.setData({
          je_id: job.je_id,
          fullOrPart: job.je_job_type,
          city: je_job_location,
          citycode: job.je_job_location,
          expectJob: job.p_name,
          expectJobId: job.je_job_expectation,
          expectJobIndex: this.data.position.findIndex(i => i.p_id == job.je_job_expectation),
          salaryArray: salaryArrays,
          salaryIndex: [minIndex, salaryArrays[1].indexOf(job.je_job_salary_max)],
          salaryMin: job.je_job_salary_min,
          salaryMax: job.je_job_salary_max,
        })
      }
    } else if (this.data.maskType == 4) {
      var addOrEdit = e.currentTarget.dataset.addoredit
      this.setData({
        addOrEdit2: addOrEdit
      })
      if (addOrEdit == 1) {
        var educationalArray = JSON.parse(JSON.stringify(this.data.educationalArray))
        educationalArray[1] = []
        this.setData({
          educationalArray: educationalArray,
          ee_id: 0,
          school: '',
          educationalIndex: [0, 0],
          education: '',
          educationId: 0,
          fullPart: '',
          fullPartId: 0,
          major: '',
          timeRangeIndex: [0, 2],
          timeRangeL: '',
          timeRangeR: '',
          schoolExperience: ''
        })
      } else {
        var educational = this.data.educational[e.currentTarget.dataset.index]
        var educationalArray = JSON.parse(JSON.stringify(this.data.educationalArray))
        if (educational.ee_education > 3) {
          educationalArray[1] = ['全日制', '非全日制']
        }
        var timeRangeArray = JSON.parse(JSON.stringify(this.data.timeRangeArray))
        var timeRangeIndexL = timeRangeArray[0].indexOf(Number(educational.ee_start_year))
        var arr = this.getYear(Number(educational.ee_start_year))
        var timeRangeIndexR = arr.indexOf(Number(educational.ee_end_year))
        timeRangeArray[1] = arr
        this.setData({
          timeRangeArray: timeRangeArray,
          educationalArray: educationalArray,
          ee_id: educational.ee_id,
          school: educational.ee_school,
          educationalIndex: [educational.ee_education - 1, educational.ee_education_type - 1],
          education: educational.education,
          educationId: educational.ee_education,
          fullPart: educationalArray[1][educational.ee_education_type - 1],
          fullPartId: educational.ee_education_type,
          major: educational.ee_major,
          timeRangeIndex: [timeRangeIndexL, timeRangeIndexR],
          timeRangeL: educational.ee_start_year,
          timeRangeR: educational.ee_end_year,
          schoolExperience: educational.ee_association_activity
        })
      }
    } else if (this.data.maskType == 5) {
      var addOrEdit = e.currentTarget.dataset.addoredit
      this.setData({
        addOrEdit3: addOrEdit
      })
      if (addOrEdit == 1) {
        this.setData({
          we_id: 0,
          company: '',
          entryTime: '入职时间',
          departureTime: '至今',
          jobTitle: '请选择',
          jobTitleId: 0,
          jobTitleIndex: 0,
          jobDuties: ''
        })
      } else {
        var work_experience = this.data.work_experience[e.currentTarget.dataset.index]
        this.setData({
          we_id: work_experience.we_id,
          company: work_experience.we_corporate_name,
          entryTime: work_experience.we_start_date,
          departureTime: work_experience.we_end_date,
          jobTitle: work_experience.work,
          jobTitleId: work_experience.we_position_id,
          jobTitleIndex: work_experience.we_position_id - 1,
          jobDuties: work_experience.we_job_content
        })
      }
    } else if (this.data.maskType == 6) {
      var that = this
      if (this.data.provincess && this.data.longitudes) {
        this.setData({
          provinces: this.data.provincess,
          city: this.data.citys,
          area: this.data.areas,
          workAddress: this.data.workAddresss,
          fullAddress: this.data.fullAddresss,
          longitude: this.data.longitudes,
          latitude: this.data.latitudes,
          active2: 'active'
        })
      } else {
        this.setData({
          workAddress: '正在获取地址...'
        })
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
            })
            that.getAddress(res.longitude, res.latitude)
          }
        })
      }
    }
  },
  focus(e) {
    var item = e.currentTarget.dataset.item
    if (item == 9 && e.detail.value) {
      this.setData({
        showview: '',
      })
    }
  },
  z_input(e) {
    var val = e.detail.value
    var cur = e.detail.cursor
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        name: val
      })
    } else if (item == 2) {
      this.setData({
        phone: val
      })
    } else if (item == 3) {
      this.setData({
        areaVal: val,
        areaWords: cur
      })
    } else if (item == 4) {
      this.setData({
        school: val
      })
    } else if (item == 5) {
      this.setData({
        major: val
      })
    } else if (item == 6) {
      this.setData({
        schoolExperience: val
      })
    } else if (item == 7) {
      this.setData({
        company: val
      })
    } else if (item == 8) {
      this.setData({
        jobDuties: val
      })
    } else if (item == 9) {
      this.getsuggest(e.detail.value)
    } else if (item == 10) {
      this.setData({
        fullAddress: e.detail.value
      })
      if (this.data.provinces && this.data.city && this.data.area && this.data.workAddress && this.data.fullAddress && this.data.longitude && this.data.latitude) {
        this.setData({
          active2: 'active'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    }
  },
  z_blur() {
    var phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    if (this.data.phone) {
      if (phoneReg.test(this.data.phone)) {} else {
        this.setData({
          phone: '',
          phonePlaceholder: "格式不正确",
          phonePlaceholderClass: "placeholderErr",
        })
      }
    } else {
      this.setData({
        phone: '',
        phonePlaceholder: "编辑手机号",
        phonePlaceholderClass: "placeholder",
      })
    }
  },
  save(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      var obj = {
        token: wx.getStorageSync('userInfo').token,
        r_head_portrait: this.data.avatar,
        r_name: this.data.name,
        r_sex: this.data.sex,
        r_born: this.data.born,
        r_work_role: this.data.isStudentCode,
        r_working_time: this.data.workTime == '编辑参加工作时间' ? '' : this.data.workTime,
        r_mobile: this.data.phone,
      }
      if (obj.r_head_portrait != '' && obj.r_name != '' && obj.r_sex != '编辑性别' && obj.r_born != '编辑出生年月' && ((obj.r_work_role == 3 && this.data.workTime != '编辑参加工作时间') || (obj.r_work_role && obj.r_work_role < 3)) && obj.r_mobile != '') {
        app.post('/Job/setMyself', obj).then((res) => {
          if (res.data.status == 1) {
            this.setData({
              show: false
            })
            this.getData()
          } else {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              duration: 1000
            })
          }
        })
      } else {
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 1000
        })
      }
    } else if (item == 2) {
      var obj = {
        token: wx.getStorageSync('userInfo').token,
        r_advantage: this.data.areaVal
      }
      if (obj.areaVal != '') {
        app.post('/Job/setAdvantage', obj).then((res) => {
          if (res.data.status == 1) {
            this.setData({
              show: false
            })
            this.getData()
          } else {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              duration: 1000
            })
          }
        })
      } else {
        wx.showToast({
          title: '请输入内容',
          icon: 'error',
          duration: 1000
        })
      }
    } else if (item == 3) {
      var obj = {
        token: wx.getStorageSync('userInfo').token,
        je_id: this.data.je_id,
        je_job_type: this.data.fullOrPart,
        je_job_location: this.data.citycode,
        je_job_expectation: this.data.expectJobId,
        je_job_salary_min: this.data.salaryMin,
        je_job_salary_max: this.data.salaryMax,
      }
      if (obj.je_job_location != '' && obj.expectJobId != 0 && obj.je_job_salary_min != '' && obj.je_job_salary_max != '') {
        app.post('/Job/setJobExpectation', obj).then((res) => {
          if (res.data.status == 1) {
            this.setData({
              show: false
            })
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 2]
            currentPage.getPosition()
            this.getData()
          } else {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              duration: 1000
            })
          }
        })
      } else {
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 1000
        })
      }
    } else if (item == 4) {
      var obj = {
        token: wx.getStorageSync('userInfo').token,
        ee_id: this.data.ee_id,
        ee_school: this.data.school,
        ee_education: this.data.educationId,
        ee_education_type: this.data.fullPartId,
        ee_major: this.data.major,
        ee_start_year: this.data.timeRangeL,
        ee_end_year: this.data.timeRangeR,
        ee_association_activity: this.data.schoolExperience
      }
      if (obj.ee_school != '' && obj.ee_education != '' && obj.ee_major != '' && obj.ee_start_year != '' && obj.ee_association_activity != '') {
        app.post('/Job/setEducationalExperience', obj).then((res) => {
          if (res.data.status == 1) {
            this.setData({
              show: false
            })
            this.getData()
          } else {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              duration: 1000
            })
          }
        })
      } else {
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 1000
        })
      }
    } else if (item == 5) {
      var obj = {
        token: wx.getStorageSync('userInfo').token,
        we_id: this.data.we_id,
        we_corporate_name: this.data.company,
        we_start_date: this.data.entryTime,
        we_end_date: this.data.departureTime,
        we_position_id: this.data.jobTitleId,
        we_job_content: this.data.jobDuties
      }
      if (obj.we_corporate_name != '' && obj.we_start_date != '入职时间' && obj.we_position_id != 0 && obj.we_job_content != '') {
        app.post('/Job/setWorkExperience', obj).then((res) => {
          if (res.data.status == 1) {
            this.setData({
              show: false
            })
            this.getData()
          } else {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              duration: 1000
            })
          }
        })
      } else {
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 1000
        })
      }
    } else if (item == 6) {
      if (this.data.provinces && this.data.city && this.data.area && this.data.workAddress && this.data.fullAddress && this.data.longitude && this.data.latitude) {
        this.setData({
          provincess: this.data.provinces,
          citys: this.data.city,
          areas: this.data.area,
          workAddresss: this.data.workAddress,
          fullAddresss: this.data.fullAddress,
          longitudes: this.data.longitude,
          latitudes: this.data.latitude,
          address: this.data.workAddress + this.data.fullAddress
        })
        if (this.data.longitudes != '' && this.data.latitudes != '' && this.data.fullAddresss != '' && this.data.address != '编辑居住地址') {
          app.post('/Job/setAddress', {
            token: wx.getStorageSync('userInfo').token,
            r_longitude: this.data.longitudes,
            r_latitude: this.data.latitudes,
            r_address: this.data.workAddresss,
            r_doorplate: this.data.fullAddresss,
            r_provinces: this.data.provincess,
            r_city: this.data.citys,
            r_area: this.data.areas
          }).then((res) => {
            if (res.data.status == 1) {
              this.setData({
                show: false
              })
              this.getData()
            } else {
              wx.showToast({
                title: '保存失败',
                icon: 'error',
                duration: 1000
              })
            }
          })
        }
      }
    }
  },
  cancel(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      app.post('/Job/delJobExpectation', {
        token: wx.getStorageSync('userInfo').token,
        je_id: this.data.je_id
      }).then((res) => {
        if (res.data.status == 1) {
          this.setData({
            show: false
          })
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 2]
          currentPage.getPosition()
          this.getData()
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'error',
            duration: 1000
          })
        }
      })
    } else if (item == 2) {
      app.post('/Job/delEducationalExperience', {
        token: wx.getStorageSync('userInfo').token,
        ee_id: this.data.ee_id
      }).then((res) => {
        if (res.data.status == 1) {
          this.setData({
            show: false
          })
          this.getData()
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'error',
            duration: 1000
          })
        }
      })
    } else if (item == 3) {
      app.post('/Job/delWorkExperience', {
        token: wx.getStorageSync('userInfo').token,
        we_id: this.data.we_id
      }).then((res) => {
        if (res.data.status == 1) {
          this.setData({
            show: false
          })
          this.getData()
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'error',
            duration: 1000
          })
        }
      })
    }
  },
  bindChange(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        sex: this.data.array[e.detail.value]
      })
    } else if (item == 2) {
      this.setData({
        born: e.detail.value
      })
    } else if (item == 3) {
      this.setData({
        workTime: e.detail.value
      })
    } else if (item == 4) {
      this.setData({
        expectJob: this.data.position[e.detail.value].p_name,
        expectJobId: this.data.position[e.detail.value].p_id
      })
    } else if (item == 5) {
      this.setData({
        salaryMin: this.data.salaryArray[0][e.detail.value[0]],
        salaryMax: this.data.salaryArray[1][e.detail.value[1]]
      })
    } else if (item == 6) {
      this.setData({
        jobState: this.data.stateJob[e.detail.value].js_name,
        jobStateId: this.data.stateJob[e.detail.value].js_id,
      })
      app.post('/Job/setJobStatus', {
        token: wx.getStorageSync('userInfo').token,
        r_job_status: this.data.jobStateId
      }).then((res) => {

      })
    } else if (item == 7) {
      if (e.detail.value[0] > 2) {
        this.setData({
          education: this.data.educationals[e.detail.value[0]].e_name,
          educationId: this.data.educationals[e.detail.value[0]].e_id,
          fullPart: this.data.educationalArray[1][e.detail.value[1]],
          fullPartId: e.detail.value[1] == 0 ? 1 : 2,
        })
      } else {
        this.setData({
          education: this.data.educationals[e.detail.value[0]].e_name,
          educationId: this.data.educationals[e.detail.value[0]].e_id,
          fullPart: '',
          fullPartId: 0,
        })
      }
    } else if (item == 8) {
      this.setData({
        timeRangeL: this.data.timeRangeArray[0][e.detail.value[0]],
        timeRangeR: this.data.timeRangeArray[1][e.detail.value[1]],
      })
    } else if (item == 9) {
      this.setData({
        entryTime: e.detail.value
      })
    } else if (item == 10) {
      this.setData({
        departureTime: e.detail.value
      })
    } else if (item == 11) {
      this.setData({
        jobTitle: this.data.position[e.detail.value].p_name,
        jobTitleId: this.data.position[e.detail.value].p_id
      })
    } else if (item == 12) {
      this.setData({
        isStudent: this.data.studentArray[e.detail.value],
        isStudentCode: Number(e.detail.value) + 1,
      })
      if (this.data.isStudentCode && this.data.isStudentCode != 3) {
        this.setData({
          disabled: true,
          workTime: '编辑参加工作时间'
        })
      } else {
        this.setData({
          disabled: false
        })
      }
    }
  },
  bindColumnChange(e) {
    var item = e.currentTarget.dataset.item
    var salaryIndex = JSON.parse(JSON.stringify(this.data.salaryIndex))
    var salaryArrays = JSON.parse(JSON.stringify(this.data.salaryArrays))
    var educationalIndex = JSON.parse(JSON.stringify(this.data.educationalIndex))
    var educationalArray = JSON.parse(JSON.stringify(this.data.educationalArray))
    var timeRangeIndex = JSON.parse(JSON.stringify(this.data.timeRangeIndex))
    var timeRangeArray = JSON.parse(JSON.stringify(this.data.timeRangeArray))
    if (item == 5) {
      if (e.detail.column == 0) {
        if (e.detail.value == 0) {
          salaryArrays[1].splice(1, salaryArrays[1].length)
          this.setData({
            salaryArray: salaryArrays
          })
        } else {
          salaryIndex[0] = e.detail.value
          salaryIndex[1] = 0
          salaryArrays[1].splice(0, e.detail.value)
          this.setData({
            salaryArray: salaryArrays,
            salaryIndex: salaryIndex
          })
        }
      }
    } else if (item == 7) {
      if (e.detail.column == 0) {
        if (e.detail.value > 2) {
          educationalArray[1] = ['全日制', '非全日制']
        } else {
          educationalArray[1] = []
        }
        educationalIndex[0] = e.detail.value
        educationalIndex[1] = 0
        this.setData({
          educationalArray: educationalArray,
          educationalIndex: educationalIndex
        })
      }
    } else if (item == 8) {
      if (e.detail.column == 0) {
        var arr = this.getYear(timeRangeArray[0][e.detail.value])
        timeRangeArray[1] = arr
        timeRangeIndex[0] = e.detail.value
        timeRangeIndex[1] = 2
        this.setData({
          timeRangeArray: timeRangeArray,
          timeRangeIndex: timeRangeIndex
        })
      }
    }
  },
  // 个人信息
  avatar() {
    this.upload(1)
  },
  // 求职期望
  fullOrPart(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        fullOrPart: 1
      })
    } else if (item == 2) {
      this.setData({
        fullOrPart: 2
      })
    }
  },
  // 上传图片
  upload(item) {
    // var item = e.currentTarget.dataset.item
    const that = this
    //调用微信上传照片的方法
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: "#f7982a",
      //成功时回调
      success(res) {
        if (!res.cancel) {
          //调用相册或者照相的方法，传参INDEX 
          that.chooseImage(res.tapIndex, item)
        }
      },
      //失败时回调
      fail(res) {
        console.log('调用失败');
      }
    })
  },
  //打开相册或者照相的方法
  chooseImage(tapIndex, item) {
    const that = this
    //调用微信方法 打开相册或者照相的功能
    wx.chooseMedia({
      count: 1,
      sizeType: ['compressed'],
      //根据下标选择data数据，以此判断是拍照还是相册
      sourceType: [that.data.sourceType[tapIndex]],
      success(res) {
        try {
          app.upload(res.tempFiles[0].tempFilePath, "resume" + wx.getStorageSync('userInfo').user_id).then(res => {
            if (res.status == 1) {
              if (item == 1) {
                that.setData({
                  avatar: res.data.fullurl
                })
              }
            }
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      }
    })
  },
  // 获取数据
  getData() {
    var cityList = city.cityList();
    app.post('/Job/getResume', {
      token: wx.getStorageSync('userInfo').token
    }).then((res) => {
      if (res.data.status == 1) {
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
        try {
          if (res.data.data.job_expectation.length != 0) {
            res.data.data.job_expectation.forEach(i => {
              i.p_name = this.data.position.find(j => i.je_job_expectation == j.p_id).p_name
              cityList.forEach(j => {
                j.cityInfo.find(k => {
                  if (i.je_job_location == k.code) {
                    i.city = k.city
                  }
                })
              })
            })
          }
          if (res.data.data.educational.length != 0) {
            res.data.data.educational.forEach(i => {
              i.education = this.data.educationals.find(j => i.ee_education == j.e_id).e_name
            })
          }
          if (res.data.data.work_experience.length != 0) {
            res.data.data.work_experience.forEach(i => {
              i.work = this.data.position.find(j => i.we_position_id == j.p_id).p_name
            })
          }
          var stateJobs = this.data.stateJob.find(i => i.js_id == res.data.data.basic.r_job_status)
          res.data.data.basic.r_work = this.data.month > res.data.data.basic.r_working_time.slice(5, 7) ? this.data.year - res.data.data.basic.r_working_time.slice(0, 4) + 1 : this.data.year - res.data.data.basic.r_working_time.slice(0, 4)
          this.setData({
            address: res.data.data.basic.r_address + res.data.data.basic.r_doorplate,
            provincess: res.data.data.basic.r_provinces,
            citys: res.data.data.basic.r_city,
            areas: res.data.data.basic.r_area,
            workAddresss: res.data.data.basic.r_address,
            fullAddresss: res.data.data.basic.r_doorplate,
            longitudes: res.data.data.basic.r_longitude,
            latitudes: res.data.data.basic.r_latitude,
            basic: res.data.data.basic,
            job_expectation: res.data.data.job_expectation,
            jobState: stateJobs.js_name,
            jobStateId: stateJobs.js_id,
            stateJobIndex: stateJobs.js_id - 1,
            educational: res.data.data.educational,
            work_experience: res.data.data.work_experience
          })
        } catch (res) {
          this.getData()
        }
      }
    })
  },
  getYear(year) {
    var arrs = []
    for (var i = year + 1; i <= year + 5; i++) {
      arrs.unshift(i)
    }
    return arrs
  },
  getAddress(lng, lat) {
    qqMapSdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng
      },
      success: (res) => {
        this.setData({
          provinces: res.result.ad_info.nation_code,
          city: res.result.ad_info.city_code.slice(3, 7),
          area: res.result.ad_info.adcode,
          workAddress: res.result.formatted_addresses.recommend,
          longitude: res.result.location.lng,
          latitude: res.result.location.lat,
        }, (() => {
          setTimeout(() => {
            this.setData({
              show_ani: "",
            })
          }, 1000);
        }))
      },
      fail: (res) => {
        this.setData({
          workAddress: "获取位置信息失败"
        })
      }
    })
  },
  regionchange(e) {
    var that = this
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.setData({
        workAddress: "正在获取地址...",
        show_ani: "show_ani",
        fullAddress: '',
        showview: '1'
      })
      that.map = wx.createMapContext("maps", that);
      that.map.getCenterLocation({
        type: 'gcj02',
        success: (res) => {
          this.getAddress(res.longitude, res.latitude);
        }
      })
    }
  },
  clickMap() {
    this.setData({
      showview: '1'
    })
  },
  //触发关键词输入提示事件
  getsuggest(value) {
    if (value.replace(/\s+/g, '') == "") {
      this.setData({
        showview: '1'
      })
    }
    var _this = this;
    //调用关键词提示接口
    qqMapSdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: wx.getStorageSync('userInfo').citys, //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size: 8,
      success(res) { //搜索成功后的回调
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            address: res.data[i].address,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          showview: '',
          addressArr: sug
        });
      },
      fail: function (error) {
        _this.setData({
          showview: '1'
        })
      },
      complete: function (res) {

      }
    });
  },
  // 选择地址
  cilckItem(e) {
    var index = e.currentTarget.dataset.index
    this.data.addressArr[index]
    this.getAddress(this.data.addressArr[index].longitude, this.data.addressArr[index].latitude)
    this.setData({
      showview: '1',
      fullAddress: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() => {
      wx.showLoading({
        title: '加载中',
      })
    }, 200)
    wx.setNavigationBarTitle({
      title: '在线简历',
    })
    var arr = []
    wx.getStorageSync('position').forEach(i => {
      arr.push(i.p_name)
    })
    var arrs = []
    wx.getStorageSync('jobStatus').forEach(i => {
      arrs.push(i.js_name)
    })
    var arrss = []
    wx.getStorageSync('education').forEach(i => {
      arrss.push(i.e_name)
    })
    this.setData({
      expectJobArray: arr,
      jobTitleArray: arr,
      position: wx.getStorageSync('position'),
      stateJobArray: arrs,
      stateJob: wx.getStorageSync('jobStatus'),
      educationalArray: [arrss, []],
      educationals: wx.getStorageSync('education')
    })
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var arr = []
    for (var i = year; i >= 1990; i--) {
      arr.push(i)
    }
    var arrs = this.getYear(year)
    this.setData({
      timeRangeArray: [arr, arrs],
      year: year,
      month: month
    })
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})