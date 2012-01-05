function showBloggers(boxid, i, linkid) {
				var s = document.getElementById(boxid);
				var link = document.getElementById(linkid);
				if(s.style.display == "block" && i == 0) {
					s.style.display = "none";
					//link.style.background = "#5A668C";
					link.style.textDecoration = "none";
					
				}else if(i == 1) {
						s.style.display = "none";
						link.style.textDecoration = "none";
						
					//	link.style.background = "#5A668C";
					}else{
					s.style.display = "block";
					link.style.textDecoration = "underline";
					
					//link.style.background = "#EA2E49";
					
				} 

			}
			
function showCategories(boxid, i, linkid) {
				var s = document.getElementById(boxid);
				var link = document.getElementById(linkid);
				if(s.style.display == "block" && i == 0) {
					s.style.display = "none";
					//link.style.background = "#5A668C";
					link.style.textDecoration = "none";
					
				}else if(i == 1) {
						s.style.display = "none";
						link.style.textDecoration = "none";
					//	link.style.background = "#5A668C";
					}else{
					s.style.display = "block";
					link.style.textDecoration = "underline";
					
					//link.style.background = "#EA2E49";
					
				} 

			}
			
