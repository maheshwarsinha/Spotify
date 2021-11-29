
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
 var input = document.getElementById("search");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      songsearch(e);
    }
  });
  input.addEventListener("mousedown", function (e) {
    e.target.value="";
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
  
  
function play(x)// Function To Play A Song
{
	
	a=document.getElementsByClassName('play');					
	a[x].style.display="none";
	a=document.getElementsByClassName('pause');					
	a[x].style.display="block";
	var i;
	var audio=document.getElementsByClassName('gaana');	
	
	//audio[x].play();
	for(i=0;i<audio.length;i++)
	{
		if(i==x)
		{
			audio[i].play();
			document.getElementById("search").value="Playing "+(i+1)+" Song At "+(Math.floor(i/7)+1)+" Page";
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
	var audio=document.getElementsByClassName('gaana');	
	audio[x].pause();
} ;


function playlist(x) //Funtion To Change From One Box Of Song To Another
{
	var songs=document.getElementsByClassName('songs');	
	var i;
	for(i=0;i<songs.length;i++)
	{
		if(i==x)
		{
			songs[i].style.display="block";
		}
		else
		{
			songs[i].style.display="none";
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
