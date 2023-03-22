// JavaScript Document

	var turn = 1;

  	var goldPriceSelector = 7;
	var goldPrice = [0,0,350,325,300,275,250,250,225,200,175,150];
	var goldTop = 2;
	var goldBottom = 11;
	
  	var copperPriceSelector = 7;
	var copperPrice = [0,0,400,320,280,240,200,200,160,140,120,100];
	var copperTop = 2;
	var copperBottom = 11;

  	var silverPriceSelector = 6;
	var silverPrice = [0,0,400,300,240,200,200,180,160,120,100];
	var silverTop = 2;
	var silverBottom = 11;

  	var denLumPriceSelector = 7;
	var denLumPrice = [0,0,300,240,200,160,120,100,80,60,40,30];
	var denLumTop = 4;
	var denLumBottom = 10;

  	var slcLumPriceSelector = 6;
	var slcLumberPrice = [0,0,300,240,200,160,120,100,80,60,40,30];
	var slcLumTop = 2;
	var slcLumBottom = 8;

  	var puebloLumPriceSelector = 7;
	var puebloLumPrice = [0,0,300,240,200,160,120,100,80,60,40,30];
	var puebloLumTop = 4;
	var puebloLumBottom = 10;

  	var sfLumPriceSelector = 8;
	var sfLumPrice = [0,0,300,240,200,160,120,100,80,60,40,30];
	var sfLumTop = 5;
	var sfLumBottom = 11;
	
  	var epLumPriceSelector = 7;
	var epLumPrice = [0,0,300,240,200,160,120,100,80,60,40,30];
	var epLumTop = 4;
	var epLumBottom = 10;

  	var denCoalPriceSelector = 6;
	var denCoalPrice = [0,0,140,120,100,80,60,60,40,30,20,20];
	var denCoalTop = 2;
	var denCoalBottom = 9;

  	var slcCoalPriceSelector = 7;
	var slcCoalPrice = [0,0,140,120,100,80,60,60,40,30,20,20];
	var slcCoalTop = 4;
	var slcCoalBottom = 11;

  	var puebloCoalPriceSelector = 8;
	var puebloCoalPrice = [0,0,140,120,100,80,60,60,40,30,20,20];
	var puebloCoalTop = 5;
	var puebloCoalBottom = 11;

  	var sfCoalPriceSelector = 7;
	var sfCoalPrice = [0,0,140,120,100,80,60,60,40,30,20,20];
	var sfCoalTop = 3;
	var sfCoalBottom = 10;

  	var epCoalPriceSelector = 6;
	var epCoalPrice = [0,0,140,120,100,80,60,60,40,30,20,20];
	var epCoalTop = 2;
	var epCoalBottom = 9;

	var boardState = new Array();
	var turn = 1;

	boardState[0]=[goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector];

function setSelectors(gPS,cPS,sPS,dLPS,slcLPS,pLPS,sfLPS,epLPS,dCPS,slcCPS,pCPS,sfCPS,epCPS) {
	$( "ul#goldprice li:nth-child(" + gPS +")" ).toggleClass( "highlighted" );
	$( "ul#copperprice li:nth-child(" + cPS +")" ).toggleClass( "highlighted" );
	$( "ul#silverprice li:nth-child(" + sPS +")" ).toggleClass( "highlighted" );
	$( "ul#denLumPrice li:nth-child(" + dLPS +")" ).toggleClass( "highlighted" );
	$( "ul#slcLumPrice li:nth-child(" + slcLPS +")" ).toggleClass( "highlighted" );
	$( "ul#puebloLumPrice li:nth-child(" + pLPS +")" ).toggleClass( "highlighted" );
	$( "ul#sfLumPrice li:nth-child(" + sfLPS +")" ).toggleClass( "highlighted" );
	$( "ul#epLumPrice li:nth-child(" + epLPS +")" ).toggleClass( "highlighted" );
	$( "ul#denCoalprice li:nth-child(" + dCPS +")" ).toggleClass( "highlighted" );
	$( "ul#slcCoalprice li:nth-child(" + slcCPS +")" ).toggleClass( "highlighted" );
	$( "ul#puebloCoalprice li:nth-child(" + pCPS +")" ).toggleClass( "highlighted" );
	$( "ul#sfCoalprice li:nth-child(" + sfCPS +")" ).toggleClass( "highlighted" );
	$( "ul#epCoalprice li:nth-child(" + epCPS +")" ).toggleClass( "highlighted" );	
}

function getIDN(turn) {
	switch(turn) {
		case 1:
		case 2:
			return 0;
			break;
		case 3:
		case 4:
			return 1;
			break;
		case 5:
		case 6:
		case 7:
			return 2;
			break;
		case 8:
		case 9:
		case 10:
			return 3;
			break;
		case 11:
		case 12:
		case 13:
		case 14:
			return 4;
		case 15:
		case 16:
		case 17:
		case 18:
			return 5;
			break;
		case 19:
		case 20:
		case 21:
		case 22:
			return 6;
			break;
		default:
			return 7;
	}
}

function getLumPriceChange(sold,i) {
	var d1=Math.floor(Math.random()*6)+1;
	var d2=Math.floor(Math.random()*6)+1;
	d1+=d2+sold-i;
	if(d1<2) {
		return -3;
	} else {
		switch(d1) {
			case 2:
			case 3:
				return -2;
				break;
			case 4:
			case 5:
				return -1;
				break;
			case 6:
				return 0;
				break;
			case 7:
			case 8:
				return 1;
				break;
			case 9:
			case 10:
				return 2;
				break;
			case 11:
			case 12:
				return 3;
				break;
			default:
				return 4;
		}
	}
}

function getCoalPriceChange(sold,i) {
	var d1=Math.floor(Math.random()*6)+1;
	var d2=Math.floor(Math.random()*6)+1;
	d1+=d2+sold-i;
	if(d1<2) {
		return -3;
	} else {
		switch(d1) {
			case 2:
			case 3:
				return -2;
				break;
			case 4:
			case 5:
				return -1;
				break;
			case 6:
			case 7:
			case 8:
				return 0;
				break;
			case 9:
			case 10:
				return 1;
				break;
			case 11:
			case 12:
				return 2;
				break;
			default:
				return 3;
		}
	}
}

function stepBack() {
	if(turn>1) {
		  setSelectors(goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector);
		  turn--;
		  goldPriceSelector=boardState[turn][0];
		  copperPriceSelector=boardState[turn][1];
		  silverPriceSelector=boardState[turn][2];
		  denLumPriceSelector=boardState[turn][3];
		  slcLumPriceSelector=boardState[turn][4];
		  puebloLumPriceSelector=boardState[turn][5];
		  sfLumPriceSelector=boardState[turn][6];
		  epLumPriceSelector=boardState[turn][7];
		  denCoalPriceSelector=boardState[turn][8];
		  slcCoalPriceSelector=boardState[turn][9];
		  puebloCoalPriceSelector=boardState[turn][10];
		  sfCoalPriceSelector=boardState[turn][11];
		  epCoalPriceSelector=boardState[turn][12];
		  setSelectors(goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector);
	}
}

function nextRound() {
//		$( "#results" ).empty();
	var die1,die2;
	
	var idn=getIDN(turn);
  
	$( "#results" ).append( "figuring prices for turn " + turn + "the IDN is " + idn + "<BR>"); 
  
	// turn off the highlights that have been set
	$( "#results" ).append( "turning off highlights<BR>"); 
	setSelectors(goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector);
	
	// make gold price change and log it
	die1=Math.floor(Math.random()*6)+1;
	die1+=parseInt($("#goldSold").val());
	switch(die1) {
		case 1:
			goldPriceSelector-=2;
			break;
		case 2:
		case 3:
			goldPriceSelector--;
			break;
		case 4:
		case 5:
			// no change
			break;
		case 6:
		case 7:
			goldPriceSelector++;
			break;
		default:
			goldPriceSelector+=2;
	}
	if(goldPriceSelector<goldTop) {
		goldPriceSelector=goldTop;
	}
	if(goldPriceSelector>goldBottom) {
		goldPriceSelector=goldBottom;
	}
			
	$( "#results" ).append( "Gold: " + die1 + " was rolled, thus new price is " + goldPrice[goldPriceSelector] + "<BR>"); 
  
	// make copper price change and log it
	die1=Math.floor(Math.random()*6)+1;
	die1+=parseInt($("#copperSold").val());
	switch(die1) {
		case 1:
			copperPriceSelector-=3;
			break;
		case 2:
			copperPriceSelector-=2;
			break;
		case 3:
			copperPriceSelector--;
			break;
		case 4:
		case 5:
			// no change
			break;
		case 6:
		case 7:
			copperPriceSelector++;
			break;
		case 8:
		case 9:
			copperPriceSelector+=2;
			break;
		case 10:
		case 11:
			copperPriceSelector+=3;
			break;
		default:
			copperPriceSelector+=4;
	}
	if(copperPriceSelector<copperTop) {
		copperPriceSelector=copperTop;
	}
	if(copperPriceSelector>copperBottom) {
		copperPriceSelector=copperBottom;
	}
			
	$( "#results" ).append( "copper: " + die1 + " was rolled, thus new price is " + copperPrice[copperPriceSelector] + "<BR>"); 
  
	// make silver price change and log it
	die1=Math.floor(Math.random()*6)+1;
	die2=Math.floor(Math.random()*6)+1;
	die1+=die2+parseInt($("#silverSold").val())-idn;
	if(die1<1) {
		silverPriceSelector-=5;
	} else {
		switch(die1) {
			case 1:
				silverPriceSelector-=4;
				break;
			case 2:
				silverPriceSelector-=3;
				break;
			case 3:
				silverPriceSelector-=2;
				break;
			case 4:
			case 5:
				silverPriceSelector--;
				break;
			case 6:
			case 7:
				// no change
				break;
			case 8:
			case 9:
				silverPriceSelector++;
				break;
			case 10:
			case 11:
				silverPriceSelector+=2;
				break;
			case 12:
				silverPriceSelector+=3;
				break;
			case 13:
				silverPriceSelector+=3;
				break;
			case 14:
				silverPriceSelector+=3;
				break;
			case 15:
				silverPriceSelector+=3;
				break;
			default:
				silverPriceSelector+=4;
		}
	}
	if(silverPriceSelector<silverTop) {
		silverPriceSelector=silverTop;
	}
	if(silverPriceSelector>silverBottom) {
		silverPriceSelector=silverBottom;
	}
			
	$( "#results" ).append( "silver: " + die1 + " was rolled, thus new price is " + silverPrice[silverPriceSelector] + "<BR>"); 

	// make denlum price change and log it
	var priceChange=getLumPriceChange(parseInt($("#denLumSold").val()),idn);
	denLumPriceSelector+=priceChange;
	if(denLumPriceSelector<denLumTop) {
		denLumPriceSelector=denLumTop;
	}
	if(denLumPriceSelector>denLumBottom) {
		denLumPriceSelector=denLumBottom;
	}		
	$( "#results" ).append( "denLum: " + priceChange + ", thus new price is " + denLumPrice[denLumPriceSelector] + "<BR>"); 
  
	// make slcLum price change and log it
	priceChange=getLumPriceChange(parseInt($("#slcLumSold").val()),idn);
	slcLumPriceSelector+=priceChange;
	if(slcLumPriceSelector<slcLumTop) {
		slcLumPriceSelector=slcLumTop;
	}
	if(slcLumPriceSelector>slcLumBottom) {
		slcLumPriceSelector=slcLumBottom;
	}		
	$( "#results" ).append( "slcLum: " + priceChange + ", thus new price is " + slcLumPrice[slcLumPriceSelector] + "<BR>"); 
  
	// make puebloLum price change and log it
	priceChange=getLumPriceChange(parseInt($("#puebloLumSold").val()),idn);
	puebloLumPriceSelector+=priceChange;
	if(puebloLumPriceSelector<puebloLumTop) {
		puebloLumPriceSelector=puebloLumTop;
	}
	if(puebloLumPriceSelector>puebloLumBottom) {
		puebloLumPriceSelector=puebloLumBottom;
	}		
	$( "#results" ).append( "puebloLum: " + priceChange + ", thus new price is " + puebloLumPrice[puebloLumPriceSelector] + "<BR>"); 
  
	// make sfLum price change and log it
	priceChange=getLumPriceChange(parseInt($("#sfLumSold").val()),idn);
	sfLumPriceSelector+=priceChange;
	if(sfLumPriceSelector<sfLumTop) {
		sfLumPriceSelector=sfLumTop;
	}
	if(sfLumPriceSelector>sfLumBottom) {
		sfLumPriceSelector=sfLumBottom;
	}		
	$( "#results" ).append( "sfLum: " + priceChange + ", thus new price is " + sfLumPrice[sfLumPriceSelector] + "<BR>"); 
  
	// make epLum price change and log it
	priceChange=getLumPriceChange(parseInt($("#epLumSold").val()),idn);
	epLumPriceSelector+=priceChange;
	if(epLumPriceSelector<epLumTop) {
		epLumPriceSelector=epLumTop;
	}
	if(epLumPriceSelector>epLumBottom) {
		epLumPriceSelector=epLumBottom;
	}		
	$( "#results" ).append( "epLum: " + priceChange + ", thus new price is " + epLumPrice[epLumPriceSelector] + "<BR>"); 
  
	// make denCoal price change and log it
	var priceChange=getCoalPriceChange(parseInt($("#denCoalSold").val()),idn);
	denCoalPriceSelector+=priceChange;
	if(denCoalPriceSelector<denCoalTop) {
		denCoalPriceSelector=denCoalTop;
	}
	if(denCoalPriceSelector>denCoalBottom) {
		denCoalPriceSelector=denCoalBottom;
	}		
	$( "#results" ).append( "denCoal: " + priceChange + ", thus new price is " + denCoalPrice[denCoalPriceSelector] + "<BR>"); 
  
	// make slcCoal price change and log it
	var priceChange=getCoalPriceChange(parseInt($("#slcCoalSold").val()),idn);
	slcCoalPriceSelector+=priceChange;
	if(slcCoalPriceSelector<slcCoalTop) {
		slcCoalPriceSelector=slcCoalTop;
	}
	if(slcCoalPriceSelector>slcCoalBottom) {
		slcCoalPriceSelector=slcCoalBottom;
	}		
	$( "#results" ).append( "slcCoal: " + priceChange + ", thus new price is " + slcCoalPrice[slcCoalPriceSelector] + "<BR>"); 
  
	// make puebloCoal price change and log it
	var priceChange=getCoalPriceChange(parseInt($("#puebloCoalSold").val()),idn);
	puebloCoalPriceSelector+=priceChange;
	if(puebloCoalPriceSelector<puebloCoalTop) {
		puebloCoalPriceSelector=puebloCoalTop;
	}
	if(puebloCoalPriceSelector>puebloCoalBottom) {
		puebloCoalPriceSelector=puebloCoalBottom;
	}		
	$( "#results" ).append( "puebloCoal: " + priceChange + ", thus new price is " + puebloCoalPrice[puebloCoalPriceSelector] + "<BR>"); 
  
	// make sfCoal price change and log it
	var priceChange=getCoalPriceChange(parseInt($("#sfCoalSold").val()),idn);
	sfCoalPriceSelector+=priceChange;
	if(sfCoalPriceSelector<sfCoalTop) {
		sfCoalPriceSelector=sfCoalTop;
	}
	if(sfCoalPriceSelector>sfCoalBottom) {
		sfCoalPriceSelector=sfCoalBottom;
	}		
	$( "#results" ).append( "sfCoal: " + priceChange + ", thus new price is " + sfCoalPrice[sfCoalPriceSelector] + "<BR>"); 
  
	// make epCoal price change and log it
	var priceChange=getCoalPriceChange(parseInt($("#epCoalSold").val()),idn);
	epCoalPriceSelector+=priceChange;
	if(epCoalPriceSelector<epCoalTop) {
		epCoalPriceSelector=epCoalTop;
	}
	if(epCoalPriceSelector>epCoalBottom) {
		epCoalPriceSelector=epCoalBottom;
	}		
	$( "#results" ).append( "epCoal: " + priceChange + ", thus new price is " + epCoalPrice[epCoalPriceSelector] + "<BR>"); 
  
	// save the new board state and advance the turn counter
	boardState[turn++]=[goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector];
  
	$( "#results" ).append( "turning on highlights<BR>"); 
	setSelectors(goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector);

	$( "#turn" ).empty();
	$( "#turn" ).append( "Turn " + turn); 
	
	resetForms();
}

function resetForms() {
	document.getElementById("myForm").reset();
}


$(document).ready(function(){
	setSelectors(goldPriceSelector,copperPriceSelector,silverPriceSelector,denLumPriceSelector,slcLumPriceSelector,puebloLumPriceSelector,sfLumPriceSelector,epLumPriceSelector,denCoalPriceSelector,slcCoalPriceSelector,puebloCoalPriceSelector,sfCoalPriceSelector,epCoalPriceSelector);
	
});