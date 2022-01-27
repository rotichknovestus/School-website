gsap.from(".navbar", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".image", { opacity: 0, duration: 1, delay: 1, xs: 20 });
gsap.from(".content", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", { 
	opacity: 0, 
	duration: 1, 
	delay: 1.2, 
	y: 30, 
	stagger: 0.2, 
});

gsap.from(".icons span", { 
	opacity: 0, 
	duration: 1, 
	delay: 4, 
	x: -30, 
	stagger: 0.2, 
});