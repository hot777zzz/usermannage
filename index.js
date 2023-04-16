    // 信息数组
    const arr =[]
    const id=document.querySelector('#studentid')
    const uname=document.querySelector('#studentname')
    const age=document.querySelector('#studentage')
    const sex=document.querySelector('#studentsex')
    // 显示面板
    const monitor =document.querySelector('.monitor')
    // 删除按钮
    const delbtn=document.querySelector('.delbtn')
    // 表单
    const info =document.querySelector('.info')
    // 表单验证数组
    const items=document.querySelectorAll('[name]')
    // 修改按钮
    const modify=document.querySelector('#modify')
    // 搜索按钮
    const query=document.querySelector('#query')
    // 搜索框
    const querydiv=document.querySelector('#querydiv')
    const closer=document.querySelector('.close')
    // 搜索信息
    const queryinfo=document.querySelector('.queryinfo')
    const queryid=document.querySelector('#queryid')
    const queryuname=document.querySelector('#queryuname')
    const queryage=document.querySelector('#queryage')
    const querysex=document.querySelector('#querysex')
    const  queryresult=document.querySelector('.result')
    // 添加信息
    info.addEventListener('submit',function(e)
    {
    e.preventDefault()
    // console.log('执行了此项')
    // 表单验证
    if(items[1].value==''){
            id.style.borderColor='red';
            return alert('id输入不合法')
        }
    if(items[2].value===''&&items[3].value===''){
            uname.style.borderColor='red';
            age.style.borderColor='red';
            return alert('姓名与年龄输入不合法')
        }
    if(items[2].value.length<2||items[2].value.length>10){
            uname.style.borderColor='red';
            return alert('姓名输入不合法')
        }
    if(items[3].value===''||items[3].value>120)
        {
            age.style.borderColor='red';
            return alert('年龄输入不合法')
        }
    const student ={
        stuId:id.value,
        uname:uname.value,
        age:age.value,
        sex:sex.value
    }
    // console.log(student);
    // 追加数组里
    arr.push(student)
    
    // console.log(arr);
    // 清空表单
    this.reset()
    // 渲染一次
    render()
    id.style.borderColor='';
    uname.style.borderColor='';
    age.style.borderColor='';
    alert('添加成功')
    
    }
    )




    // 渲染函数
    function render(){
        monitor.innerHTML=''
        arr.forEach(function(item,i){
            const box = document.createElement('div')
            // 模板字符
            box.innerHTML=`<p class="box">id: ${item.stuId} ${item.uname} - ${item.age} - ${item.sex}<button class ="delbtn" data-id=${i}>删除</button></p> `
            // console.log(i);
        
        // 追加元素
        monitor.appendChild(box)
            
        });
            
    }



    // 删除函数（自定义属性alltheway）
    monitor.addEventListener('click',function (e){
        // 事件委托
        if(e.target.tagName.toLowerCase() ==='button'){
            // 删除自定义属性指定id的数组
           arr.splice(e.target.dataset.id, 1) 
        //重新渲染
           render()
        }
    })



    // 重置函数
    function allDel(){
    // console.log(arr);
    arr.length = 0;
        info.reset()
        render()
    }

    // 修改信息

    modify.addEventListener('click',function Modify() {
    let stuId = prompt(`请输入要修改的学生学号`);
    let result = CheckId(stuId);
    if (result == -1) {
      alert(`无此学号学生，请确认后输入！`);
    //   Modify();
    } else {
      alert(`学号输入正确，请修改信息`)
      let name = prompt("请输入名字:");
      let age = prompt("请输入年龄:");
      let sex = prompt("请输入性别:");
      arr[result].uname = name;
      arr[result].age = age;
      arr[result].sex = sex;
      alert(`修改信息为：姓名：${arr[result].uname} 年龄：${arr[result].age} 性别：${arr[result].sex} `);
      render()
    }
    })

    //   检查学号函数
    function CheckId(stuId) {
    // -------------forEach方法中的return只会结束此次循环，执行下一次循环。这里for方法用return貌似更好，可以直接跳出循环结束---------------
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].stuId == stuId) {
        return i; // 学号存在则返回对应的下标且结束此函数
      }
    }
    return -1;}// 学号不存在
    // arr.forEach(function(item,i){
    //     if (item.stuId == stuId) {
    //         return i;}
    // return -1;}) 
    //   搜索信息
    query.addEventListener('click',function(){
    querydiv.style.display='block'

    })
    closer.addEventListener('click',function(){
        queryresult.innerHTML=''
        querydiv.style.display='none'
    })
    // 搜索功能
    queryinfo.addEventListener('submit',function (e) {
    queryresult.innerHTML=''
    e.preventDefault()
    let id=queryid.value
    let uname=queryuname.value
    let age=queryage.value
    let sex=querysex.value
    // for(i=0;i<arr.length;i++){
    //     const result = document.createElement('div')
    //     if(id===item.stuId||uname===item.uname||age===item.age||sex===item.sex)
    //         result.innerHTML=`id: ${item.stuId} ${item.uname} - ${item.age} - ${item.sex}`
    //         queryresult.appendChild(result)
    //     }
    arr.forEach(it=>{
            const result = document.createElement('div')
            if(id===it.stuId||uname===it.uname||age===it.age||sex===it.sex)
            result.innerHTML=`id: ${it.stuId} ${it.uname} - ${it.age} - ${it.sex}`
            queryresult.appendChild(result)
            });
        this.reset()

    })
    
     