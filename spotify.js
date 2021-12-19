//function to trasform and highlight the song div
function change_padding(x)
{
	a=document.getElementsByClassName('songnames');		
	a[x].style.padding="55px 0px";	
	a=document.getElementsByClassName('play');
	a[x].style.borderRadius="0px";
	a[x].style.height="138px";
	a[x].style.width="130px";	
	a=document.getElementsByClassName('pause');					
	a[x].style.borderRadius="0px";
	a[x].style.height="138px";
	a[x].style.width="130px";
};
//function to reset the tarnsformation done by previous function
function reset_padding(y)
{
	a=document.getElementsByClassName('songnames');					
	a[y].style.padding="25px 0px";	
	a=document.getElementsByClassName('play');
	a[y].style.borderRadius="35px";
	a[y].style.height="68px";
    a[y].style.width="68px";		
	a=document.getElementsByClassName('pause');					
	a[y].style.borderRadius="35px";
	a[y].style.height="68px";
    a[y].style.width="68px";
};
//some mislaneous function
 var input = document.getElementById("search");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
		document.getElementsByClassName('crossicon')[0].style.display="none";
      songsearch(e);
    }
  });
  
 /** input.addEventListener("mouseover", function (e)
  {
	  e.target.value="";
  });**/
  input.addEventListener("keydown", function (e)
  {
	 document.getElementsByClassName('crossicon')[0].style.display="block";
  });
  
  input.addEventListener("click", function (e)
  {
	  if(document.getElementById('search').value!="")
	  {
		  document.getElementsByClassName('crossicon')[0].style.display="block";
		 document.getElementsByClassName('songgif')[1].style.display="none";
			document.getElementsByClassName('songgif')[0].style.display="none";
	  }
  });
  
   function validate(e) {  //to search on spotify website
    var text = e.target.value;
    window.location.href = "https://open.spotify.com/search/"+text;
	
  }; 
  
  function songsearch(e)  //To Search on this Site Only (From Number)
  {	  
	  var text = e.target.value;
	  var songid = document.getElementsByClassName('song')[text-1];
	  e.target.value = "Playing "+text+" Song At "+(Math.floor((text-1)/7)+1)+" Page";
	  play(text-1);
	  newsong(text-1);
  };
  
  function songtonum(e)//function to convert song name to number
  {
	  //e="STAY(With Justin Biber)";
	  var i;
	  for(i=0;i<50;i++)
	  {
		  if(e.trim() === document.getElementsByClassName('song')[i].children[0].innerHTML)
		  {
			  play(i);
			  newsong(i);
			  break;
		  }
	  }
  };
  
  function activeplaylist()//to check and highlight the playlist in use
  {
	  var i;
	  var song = document.getElementsByClassName('song');
	  for(i=0;i<song.length;i++)
	  {
		  var audio = song[i].children[3]
		  if(isplaying(audio))
		  {
			  newsong(i);
		  }
	  }
  };
  
  function isplaying(e)
  {
	  return !e.paused;
  };
    
function play(x)// Function To Play A Song
{
	
	a=document.getElementsByClassName('play');					
	a[x].style.display="none";
	a=document.getElementsByClassName('pause');					
	a[x].style.display="block";
	document.getElementById('songproperties').style.display="block";
	document.getElementsByClassName('playpauseseekbar')[0].style.display="none";
	document.getElementsByClassName('playpauseseekbar')[1].style.display="block";
	var i;
	var audio=document.getElementsByClassName('gaana');	
	
	//audio[x].play();
	for(i=0;i<audio.length;i++)
	{
		if(i==x)
		{
			audio[i].play();
			document.getElementsByClassName('songgif')[1].style.display="block";
			document.getElementsByClassName('songgif')[0].style.display="block";
			document.getElementById('songprogress').value=0;
			audio[i].volume=document.getElementById('volume').value/100.0;
			document.getElementById('loop').style.animation="";
			document.getElementById("search").value="Playing "+document.getElementsByClassName('song')[i].children[0].innerHTML;
			while(document.getElementById('suggestions').firstChild)
			{
				document.getElementById('suggestions').removeChild(document.getElementById('suggestions').firstChild);
			}
			audio[i].addEventListener("timeupdate",function(e){
				seekbar.value=(e.target.currentTime/e.target.duration)*100;
				
			});
		}
		else
		{
			audio[i].currentTime = 0;
			audio[i].pause();
			a=document.getElementsByClassName('play');					
			a[i].style.display="block";
			a=document.getElementsByClassName('pause');					
			a[i].style.display="none";
		}		
	}
};

 function pause(x) // Function To Pause A Song
{
	
	a=document.getElementsByClassName('play');					
	a[x].style.display="block";
	a=document.getElementsByClassName('pause');					
	a[x].style.display="none";
	document.getElementsByClassName('playpauseseekbar')[1].style.display="none";
	document.getElementsByClassName('playpauseseekbar')[0].style.display="block";
	document.getElementsByClassName('songgif')[1].style.display="none";
			document.getElementsByClassName('songgif')[0].style.display="none";
	var audio=document.getElementsByClassName('gaana');	
	audio[x].pause();
} ;

function playlist(x) //Funtion To Change From One Box Of Song To Another
{
	var songs=document.getElementsByClassName('songs');	
	var i;
	var pagei = document.getElementsByClassName('pagebox')[0];
	for(i=0;i<songs.length;i++)
	{
		if(i==x)
		{
			songs[i].style.display="block";
			pagei.children[i].style.height="21px";
			pagei.children[i].style.width="25px";
			pagei.children[i].style.top="-6px";
			pagei.children[i].style.border="2px solid green";
	}
		else
		{
			songs[i].style.display="none";
			pagei.children[i].style.height="20px";
			pagei.children[i].style.width="20px";
			pagei.children[i].style.top="0px";
			pagei.children[i].style.border="1px solid yellow";
		}
		
	}
};

function newsong(f)// On End Of A Song Toggle To New Song
{
	play(f);
	if((f%7)>=0)
	{
		playlist(Math.floor(f/7));
	}
};

// for full div Pause Play
var id=-1;
function yesq(q)
{
	 var song = document.getElementsByClassName('song');
		//play
		if(q.children[3].paused)
		{
			for (var i = 0; i < song.length; i++) 
			{
				if (song[i] === q)
				{
					id=i;
					play(i);
				}
				else{
					pause(i);
				}
		
			}
		}
		else{
			pause(id);
		}  
};
//function for suggestion of search bar
var i;
const namesofsongs=[];
for(i=0;i<50;i++)
	{
		//alert(document.getElementsByClassName('song')[i].children[0].innerHTML);
		 namesofsongs[i]={name:document.getElementsByClassName('song')[i].children[0].innerHTML};
	}
 const searchInput = document.querySelector('#search');
 const suggestionsPanel = document.querySelector('#suggestions');
 searchInput.addEventListener('keyup', function() {
	 const input = searchInput.value.toLowerCase();
	 suggestionsPanel.innerHTML = '';
	 const suggestions = namesofsongs.filter(function(variosong){
	 return variosong.name.toLowerCase().startsWith(input);	 
	 });
	suggestions.forEach(function(suggested)	
	{
		 const div = document.createElement('div');
		 div.innerHTML = suggested.name;
		 suggestionsPanel.appendChild(div);
		 div.onclick=function(){
			 document.getElementsByClassName('crossicon')[0].style.display="none";
		 document.getElementById('search').value = suggested.name;
		 songtonum(document.getElementById('search').value);
		 }	 
	});
 if(input == ''){
	 suggestionsPanel.innerHTML = '';
	 }
 });
 
var crossicon = document.getElementsByClassName('crossicon')[0];
crossicon.onclick=function()
{
	document.getElementById('search').value="";
	document.getElementsByClassName('crossicon')[0].style.display="none";
	while(document.getElementById('suggestions').firstChild)
			{
				document.getElementById('suggestions').removeChild(document.getElementById('suggestions').firstChild);
			}
};

//tfunction to play pauswe from seek bar
document.getElementsByClassName('playpauseseekbar')[0].onclick=function()
{
	document.getElementsByClassName('playpauseseekbar')[0].style.display="none";
	document.getElementsByClassName('playpauseseekbar')[1].style.display="block";
	var i;
	var song = document.getElementsByClassName('gaana');
	
	for(i=0;i<song.length;i++)
	{
		if(song[i].currentTime>0)
		{
			play(i);
			break;
		}
	}
}

document.getElementsByClassName('playpauseseekbar')[1].onclick=function ()
{
	document.getElementsByClassName('playpauseseekbar')[1].style.display="none";
	document.getElementsByClassName('playpauseseekbar')[0].style.display="block";
	var i;
	var song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			pause(i);
			break;
		}
	}
		
}
//---------------------------------------------------------------------------------------------------
//function to mute unmute and volume control


document.getElementsByClassName('volumeimage')[0].onclick=function ()
{
	document.getElementsByClassName('volumeimage')[0].style.display="none";
	document.getElementsByClassName('volumeimage')[1].style.display="block";
	var i;
	var song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			song[i].muted=true;
			break;
		}
	}
	document.getElementById('volume').value=0;	
}
document.getElementById('volume').value=100;
document.getElementsByClassName('volumeimage')[1].onclick=function ()
{
	document.getElementsByClassName('volumeimage')[1].style.display="none";
	document.getElementsByClassName('volumeimage')[0].style.display="block";
	var i;
	var song = document.getElementsByClassName('gaana');
	
	for(i=0;i<song.length;i++)
	{
		if(song[i].muted)
		{
			song[i].muted=false;
			break;
		}
	}
	document.getElementById('volume').value=50;	
}
var volume = document.getElementById('volume');
volume.addEventListener("change",function(e){
	var i;
	var song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			song[i].volume=e.target.value/100.0;
			if(song[i].volume==0)
			{
				document.getElementsByClassName('volumeimage')[0].style.display="none";
				document.getElementsByClassName('volumeimage')[1].style.display="block";
			}
			else			
			{
				document.getElementsByClassName('volumeimage')[1].style.display="none";
				document.getElementsByClassName('volumeimage')[0].style.display="block";
			}
			break;
		}
	}


});

//--------------------------------------------------------------------------------------------------

//function to change from suffle to loop or vice versae
document.getElementById('loop').onclick=function()
{
	if(document.getElementById('loop').style.animation==="")
	{
		document.getElementById('loop').style.animation="spin 2s linear  infinite";
		var i;
		var song = document.getElementsByClassName('gaana');
		for(i=0;i<song.length;i++)
		{
			if(isplaying(song[i]))
			{
				song[i].loop=true;
				break;
			}
		}
	}
	else
	{
		document.getElementById('loop').style.animation="";
		var i;
		var song = document.getElementsByClassName('gaana');
		for(i=0;i<song.length;i++)
		{
			if(song[i].loop)
			{
				song[i].loop=false;
				break;
			}
		}
	}
	
}
//--------------------------------------------------------------------------------------
// function to seek video according to seekbar
var seekbar = document.getElementById('songprogress');
var i;var song;
seekbar.addEventListener("change",function(e)
{
	song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			break;
		}
	}
	var seekto = song[i].duration * (seekbar.value/100);
	song[i].currentTime=seekto;
});
//--------------------------------------------------------------------------------------------
// function to forward or backward using buttons
document.getElementById('backwardb').onclick=function()
{
	var i;
	var song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			if(i==0)
			{
				play(0);
				newsong(0);
			}
			else
			{
				play(i-1);
			    newsong(i-1);
			}
			break;
		}
	}
	
}

document.getElementById('forwardb').onclick=function()
{
	var i;
	var song = document.getElementsByClassName('gaana');
	for(i=0;i<song.length;i++)
	{
		if(isplaying(song[i]))
		{
			if(i==55)
			{
				play(0);
				newsong(0);
			}
			else
			{
				play(i+1);
				newsong(i+1);
			}
			break;
		}
	}
	
}
