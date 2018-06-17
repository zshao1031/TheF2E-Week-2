//等網頁全部載入後才會執行的程式碼
window.onload = function () {
	
	var guideList = document.getElementById('guideList');
	var resultAmount = document.getElementById('resultAmount');
	var showingResults = 0;
	createAllGuide();

}

function createAllGuide(){
	showingResults = 0;
	for (var i = 0; i < jsonGuideData.length; i++) {
		createGuide(jsonGuideData, i);
		showingResults++;
	}
	resultAmount.innerHTML = showingResults;
}

function createGuide(jsonGuideData, i){
		var guideData = jsonGuideData[i];
		var guideItem = document.createElement('Li');
		var clearFix = document.createElement('div');
		clearFix.setAttribute('class', 'clearfix')
		
		guideItem.setAttribute('id', i);
		guideItem.setAttribute('class', 'guideItem');
				
			var guidePicture = document.createElement('div');
			guidePicture.setAttribute('class', 'guidePicture');
			guidePicture.setAttribute('style', 'background-image: url(' + guideData.Picture1 + ')');
			guideItem.appendChild(guidePicture);
		
			var guideContent = document.createElement('div');
			guideContent.setAttribute('class', 'guideContent');

				var guideTitle = document.createElement('h3');
				guideTitle.setAttribute('class', 'guideTitle');
				guideTitle.innerHTML = guideData.Name;
				guideContent.appendChild(guideTitle);

				var guideText = document.createElement('p');
				guideText.setAttribute('class', 'guideText');
				guideText.innerHTML = guideData.Description;
				guideContent.appendChild(guideText);

				var guideDataClass = document.createElement('div');
				guideDataClass.setAttribute('class', 'guideDataClass');
				DataClass = guideData.Id.substr(1, 1);
				switch (DataClass){
					case "1":
						guideDataClass.innerHTML = "景點資料";
						break;
					case "2":
						guideDataClass.innerHTML = "活動訊息資料";
						break;
					case "3":
						guideDataClass.innerHTML = "餐飲資料";
						break;
					case "4":
						guideDataClass.innerHTML = "旅館民宿資料";
						break;
					default:
						guideDataClass.innerHTML = "資料未定義";
						break;
				}
				guideContent.appendChild(guideDataClass);

				var guideClass = document.createElement('div');
				guideClass.setAttribute('class', 'guideClass');
				switch (guideData.Class1){
					case "1":
						guideClass.innerHTML = "文化類";
						break;
					case "2":
						guideClass.innerHTML = "生態類";
						break;
					case "3":
						guideClass.innerHTML = "古蹟類";
						break;
					case "4":
						guideClass.innerHTML = "廟宇類";
						break;
					case "5":
						guideClass.innerHTML = "藝術類";
						break;
					case "6":
						guideClass.innerHTML = "小吃/特產類";
						break;
					case "7":
						guideClass.innerHTML = "國家公園類";
						break;
					case "8":
						guideClass.innerHTML = "國家風景區類";
						break;
					case "9":
						guideClass.innerHTML = "休閒農業類";
						break;
					case "10":
						guideClass.innerHTML = "溫泉類";
						break;
					case "11":
						guideClass.innerHTML = "自然風景類";
						break;
					case "12":
						guideClass.innerHTML = "遊憩類";
						break;
					case "13":
						guideClass.innerHTML = "體育健身類";
						break;
					case "14":
						guideClass.innerHTML = "觀光工廠類";
						break;
					case "15":
						guideClass.innerHTML = "都會公園類";
						break;
					case "16":
						guideClass.innerHTML = "森林遊樂區類";
						break;
					case "17":
						guideClass.innerHTML = "林場類";
						break;
					case "18":
					default:
						guideClass.innerHTML = "其他";
						break;
				}
				guideContent.appendChild(guideClass);
				
				guideContent.appendChild(clearFix);				

				var guideAdd = document.createElement('div');
				guideAdd.setAttribute('class', 'guideAdd');
					
					var faMapMark = document.createElement('i');
					faMapMark.setAttribute('class', 'fas fa-map-marker-alt');
					guideAdd.appendChild(faMapMark);

					var guideAddZone = document.createElement('div');
					guideAddZone.setAttribute('class', 'guideAddZone');
					guideAddZone.innerHTML = guideData.Zone;
					guideAdd.appendChild(guideAddZone);

				guideContent.appendChild(guideAdd);

				var guideOpen = document.createElement('div');
				guideOpen.setAttribute('class', 'guideOpen');

					var faCalendar = document.createElement('i');
					faCalendar.setAttribute('class', 'far fa-calendar-alt');
					guideOpen.appendChild(faCalendar);

					var guideOpenTime = document.createElement('div');
					guideOpenTime.setAttribute('class', 'guideOpenTime');
					guideOpenTime.innerHTML = guideData.Opentime;
					guideOpen.appendChild(guideOpenTime);

				guideContent.appendChild(guideOpen);

			guideItem.appendChild(guideContent);

			clearFix = document.createElement('div');
			clearFix.setAttribute('class', 'clearfix')
			guideItem.appendChild(clearFix);

		guideList.appendChild(guideItem);
}

