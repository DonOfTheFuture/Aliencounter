/*
 make sure sound frequencies sync the brain and then a tune the hemispheres to allow patterning
 make a slide of images of peace and ufos.
 make a random image responder to see what the user  may be thinking
 let user take picture of alien in presence
 make sure the alien matches the description of alien in their prescense
 write description of alien 
 explain what aliens are
 

*/
function startSync(){
	console.log('syncing')
	let brainCtrls = allDivs(document.body)['brain-ctrls']
	let ctrls = Array.from(document.body.querySelectorAll('.ctrl'))
		let [rightCtrl, leftCtrl] = ctrls
	let ctrlVals = ctrls.map((ctrl, i)=>{
		let waveCtrls = ['note-ctrl', 'freq-ctrl'].map((str1)=>{
		let elmArr = ['label', 'input', 'h3'].map((str2)=>{
			return allDivs(allDivs(ctrl)[str1])[str2]
		})
	let [lbl, inpt, h3] = elmArr
	return elmArr
		})
	let [noteCtrl, freqCtrl] = waveCtrls
let [noteLbl, noteInpt, noteH3] = noteCtrl
let [freqLbl, freqInpt, freqH3] = freqCtrl

	let hemiDivs = Array.from(regionDivs.querySelectorAll('div'))
	let [redHemi, blueHemi] = hemiDivs
let audio = allDivs(document.body)['audio-div']	
 audio = audio.children[0]
 audio.play()
 if(i === 0){
 playSound(parseInt(noteH3.innerText, 10),parseInt(freqH3.innerText, 10), 'right')
 }else if(i === 1){
	playSound(parseInt(noteH3.innerText, 10),parseInt(freqH3.innerText, 10), 'left')
 }
	})
	scrollImg(allDivs()['peace-slide'])
	scrollImg(allDivs()['rndm-slide'])
}

(function rangeToTxt(ran){
	let regionDivs = allDivs(document.body)['regions']
	let hemiDivs = Array.from(regionDivs.querySelectorAll('div'))
	let [rightHemi, blueHemi] = hemiDivs
	let allRnge = Array.from(document.querySelectorAll('input[type=range]'))
	allRnge.forEach((rnge, i2)=>{
		let hemi = (i2 % 2 === 0)? rightHemi : blueHemi
		rnge.onchange = (e)=>{
	diffVal()
	/*
	let maxCol = 255
	let cssStr = ''
	maxCol = maxCol/parseInt(p.innerText, 10)
	if(i2 % 2 === 0){
		cssStr = 'rgb(0,0,'+maxCol+')'
	}else if(i2 % 2 !== 0){
		cssStr = 'rgb('+maxCol+',0,0)'
	}
	
	styleElm(hemi, {
		backgroundColor: cssStr
	})*/
		}
		rnge.onmouseover= (e) =>{
		rnge.onmousemove = (e) =>{
			diffVal()
		}
		}
		function diffVal(){
			let val = rnge.value
    let p = rnge.nextElementSibling
    p.innerText = val
		}
	})
})()
function allDivs(div, sel){
let elm = (div === undefined)? document.body.getElementsByTagName('*') : div.getElementsByTagName('*')
 return elm
}
function rndmNum(n1,n2){

  let bothUn = arguments.every((num)=>{
    return num == undefined
  })
  rndm = (Math.random()+'')
  if(bothUn === true){
  rndm = rndm.slice(2, (n2+'').length+2)
  return (rndm)
  }else{
   rndm = rndm.slice(3, 4)
  rndm = rndm[0]
  return parseInt(rndm, 10)
}}
function playSound(num, hz, side){
	let playInt = setInterval(()=>{
	let context = new AudioContext;
	let panner 
		if(side === 'left'){
	panner = new StereoPannerNode(context, {pan: -1})
		}else if(side === 'right'){
			panner = new StereoPannerNode(context, {pan: 1})
		}
oscillator = context.createOscillator();
oscillator.frequency.value = hz
oscillator.connect(context.destination);
oscillator.start(0);
}, (1000/num))
}
function allDivs(div, sel){
let elm = (div === undefined)? document.body.getElementsByTagName('*') : div.getElementsByTagName('*')
 return elm
}
function rndmImgs(){
	let setImg = setInterval(()=>{
		const url = 'https://random-words5.p.rapidapi.com/getRandom';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2914da1d34msh351ab7879406227p10bf89jsne4b256644e61',
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};
fetch(url, options).then(response=>{
	return response.text();
}).then(result=>{
	console.log(result)
		getPics(result);
}).catch((error)=>{
	console.error(error);
})
	}, 10000)
}
function getPics(addrStr){
		addrStr = addrStr.replaceAll(',', '%2C')
		addrStr = addrStr.replaceAll(' ', '%20')
		
		let url = 'https://bing-image-search1.p.rapidapi.com/images/search?q='+addrStr+'&count=500&safeSearch=moderate&mkt=en-US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2914da1d34msh351ab7879406227p10bf89jsne4b256644e61',
		'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
	}
};
let imgList = JSON.stringify(extractProp('value',result))
fetch(url, options).then(response =>{
return response.json()
}).then(result=>{
	let rndm = rndmNum(0, imgList.length-1)
	let peaceDiv = allDivs()['rndm-slide']
	let newImgDiv = peaceDiv.children[0].cloneNode(true)
	styleElm(newImg, {
		display: 'block',
		
	})
	newImgDiv.children[0].src = imgList[rndm]['contentUrl']
	document.body.appendChild(newImgDiv)
}).catch((error)=>{
	console.error(error);
})
	}
function scrollImg(imgsDiv){
	let imgsLen = imgsDiv.children.length - 1
	let n = 0
	let maxWidth = window.innerWidth/3
	let scrllInt = setInterval(()=>{
		if(n >= imgsLen){
			n= 0
			imgsDiv.scrollTo(0, 0)
		}else{
	
		  imgsDiv.scrollBy(maxWidth, 0)
		  n+=1
		}
	}, 15000)

	}
	function gthrBTInfo(){
		let bt = navigator.bluetooth || navigator.webkitbluetooth
		return new Promise((res)=>{
	if(bt.getAvailability()){
		bt.onavailability = function(e){
	
	let device = bt.requestDevice({
		optionalServices: ["battery_service", "device_information"],
		acceptAllDevices: true
	}).then((devices)=>{
	if(devices.length > 0){
		newDevInfoDiv(devices)
		res('1')
	}else{
		res('0')
	}
	})
}
}

		})
}
(function hasAudio(){
	return new Promise((res)=>{
  if(navigator.mediaDevices.enumerateDevices()){	
	devList()
  navigator.mediaDevices.ondevicechange = (e) =>{
    devList()
  }
	  function devList(){
    navigator.mediaDevices.enumerateDevices().then(devices=>{
     var devArr = []
	 let btInfo = Promise.resolve(gthrBTInfo())
	 let audioDevs = devices.filter((dev, i)=>{
		 let lbl = dev.label.toLowerCase().trim()
		 return dev.label.includes('audio') || dev.label.includes('Speaker') || dev.label.includes('head') || dev.label.includes('ear')
	 })
     if(audioDevs.length > 0 && btInfo === '1'){
		 		 headphoneInd('show')
	 }else{
		 headphoneInd('hide')
	 }
    }).catch((e)=>{console.log(e.name,e.message)})
  }
  
  }
	})
})()
function headphoneInd(tog){
	let headphoneDiv = allDivs(document.body)['earphone-ind']
	if(tog === 'show'){
		headphoneDiv.style.display = 'block'
	}else if(tog === 'none'){
		headphoneDiv.style.display = 'none'
	}
}
async function newDevInfoDiv(dataObj){
	//dev props id, name, gatt
	let devServer = await dataObj.gatt.connect()
	let services = ["battery_service", "device_information"].map(async (str)=>{	
return await devServer.getPrimaryService(str)
	})
	let [bttry, devInfo] = services
	let dataArr = []
	let devInfoArr = await devInfo.getCharacteristics()
	devInfoArr.forEach(async (info, i, arr)=>{
		let value = await info.readValue()
		let decodedVal = new TextDecoder().decode(value)
		dataArr.push(decodedVal)
	})
	
	let pwrLvl = await bttry.getCharacteristics("battery_level").readValue().getUInt8(0)
	dataArr.push("battery level: "+pwrLvl)
	let btCon = document.body.querySelector('.bt_cnsle')
	let devList = getElms(window,btCon)[0]
	let newDev = devList.children[0].cloneNode(true)
	
}
function styleElm(elm, obj){
	let keys = Object.keys(obj)
	keys.forEach((k, i, arr)=>{
		elm.style[k] = obj[k] 
	})
	return elm
}
function getElms(win, elm=undefined, sel, isNew=undefined){
	if(isNew !== true){
	if(sel == undefined && elm !== undefined){
		return win.document.body.getElementsByTagName(elm)
	}else if(elm == undefined && sel !== undefined){
		return win.document.body.querySelectorAll(sel)
	}else if(elm === undefined && sel === undefined){
		return win.document.getElementsByTagName('*')
	}else{
		return win.document.body.getElementsByTagName(elm).querySelectorAll(sel)
	}
	}else{
		return win.document.createElement(elm)
}}
function changeColor(ran){
    let num = parseInt(ran.nextElementSibling.innerText, 10)
    let r = num,g = 0,b =0
    let p = ran.nextElementSibling
    let pNum = parseInt(p.innerText, 10)
    p.innerText = ran.value
   // r = num
   // switch(num){
   let cssStr
        // num is red
        if(pNum < 255 && g == 0 && b == 0){
            r = num
            g = 0
            b = 0
         }else if(r >= 255 && g == 0 && b == 0){
		 /*change num to yellow*/
		 p.innerText = Math.abs(num -255)
            b = 0 
			
		 g = ((parseInt(p.innerText, 10) == 255)? 0: ((parseInt(p.innerText, 10))))
            r = (num >= (255*2))?0:255
			if(g > 255){
			p.innerText = Math.abs(g - 255)
			//b = Math.abs(parseInt(p.innerText, 10) - 255)
			}

			//num is yellow
           }else if(g > 0&&g < 255 &&b == 0 && r == 255){
            r = 255
            g = num
            b = 0
            }else if(b == 0 && r == 255 && (g >255 || num > 255 || pNum > 255)){
			        //change num to green
            r = 0
            g = Math.abs(g-255)
            b = 0

        }else if(g > 0&&r == 0&&b == 0&& (g >255 || num > 255 || pNum > 255)){
		 // num is green
		 	p.innerText = Math.abs(g - 255)
            g = num
            r = 0
            b = 255

            //change num to blue
        }else if(r == 0&&g == 255&& (g >255 || num > 255 || pNum > 255)){
            p.innerText = Math.abs(num -(255*2))
             r=0
             g = 0
            b = num
          
            //num is blue
        } else if(r == 0&&b >= 1&& b <= 255 && g == 0){
            r=0
            g = 0  
            b = (num-255)
            //change num to purple
        }else if(b == 255 && r==0&& g == 0){
            num = Math.abs(pNum -225)
            b = 255
            r = num
            g = 0
            
            //num is purple
            }else if(r > 0 && r < 255 && g == 0 && b<=255&& b >= 0){
            b == 255
            r = num
            g = 0
            //num is black
            }/*else if(b == 255 && r == 255 && g == 0){
                num = Math.abs(pNum -225)
            r == num
            g = num
            b = num
            }*/else{
           
                p.innerText = ran.value
            
			//	console.log(cssStr)
                return cssStr
            /*
         rgb(255,0,0) red
         rgb(255,252,0) yellow
        rgb(0,255,0) green
        rgb(0,0,255)  blue
        rgb(255,0,255) purple*/
    }
								    cssStr = `rgb(${r},${g},${b})`
				p.nextElementSibling.innerText=cssStr
 return p.nextElementSibling.innerText
}