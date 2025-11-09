
import Image from "next/image";
export default function Home() {
  return (
    <>
    <section className="home">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12 col-xs-12">
						<div className="headline">
							<div className="nav" id="headline-nav">
								<a className="left carousel-control" role="button" data-slide="prev">
									<span className="ion-ios-arrow-left" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="right carousel-control" role="button" data-slide="next">
									<span className="ion-ios-arrow-right" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
							<div className="owl-carousel owl-theme" id="headline">							
								<div className="item">
									<a href="#"><div className="badge">Tip!</div> Vestibulum ante ipsum primis in faucibus orci</a>
								</div>
								<div className="item">
									<a href="#">Ut rutrum sodales mauris ut suscipit</a>
								</div>
							</div>
						</div>
						<div className="owl-carousel owl-theme slide" id="featured">
							<div className="item">
								<article className="featured">
									<div className="overlay"></div>
									<figure>
										<img src="assets/images/news/img04.jpg" alt="Sample Article"/>
									</figure>
									<div className="details">
										<div className="category"><a href="category.html">Computer</a></div>
										<h1><a href="single.html">Phasellus iaculis quam sed est elementum vel ornare ligula venenatis</a></h1>
										<div className="time">December 26, 2016</div>
									</div>
								</article>
							</div>
							<div className="item">
								<article className="featured">
									<div className="overlay"></div>
									<figure>
										<img src="assets/images/news/img14.jpg" alt="Sample Article"/>
									</figure>
									<div className="details">
										<div className="category"><a href="category.html">Travel</a></div>
										<h1><a href="single.html">className aptent taciti sociosqu ad litora torquent per conubia nostra</a></h1>
										<div className="time">December 10, 2016</div>
									</div>
								</article>
							</div>
							<div className="item">
								<article className="featured">
									<div className="overlay"></div>
									<figure>
										<img src="assets/images/news/img13.jpg" alt="Sample Article"/>
									</figure>
									<div className="details">
										<div className="category"><a href="category.html">International</a></div>
										<h1><a href="single.html">Maecenas accumsan tortor ut velit pharetra mollis</a></h1>
										<div className="time">October 12, 2016</div>
									</div>
								</article>
							</div>
							<div className="item">
								<article className="featured">
									<div className="overlay"></div>
									<figure>
										<img src="assets/images/news/img05.jpg" alt="Sample Article"/>
									</figure>
									<div className="details">
										<div className="category"><a href="category.html">Lifestyle</a></div>
										<h1><a href="single.html">Mauris elementum libero at pharetra auctor Fusce ullamcorper elit</a></h1>
										<div className="time">November 27, 2016</div>
									</div>
								</article>
							</div>
						</div>
						<div className="line">
							<div>Latest News</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="row">
									<article className="article col-md-12">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img10.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<div className="detail">
													<div className="time">December 10, 2016</div>
													<div className="category"><a href="category.html">Healthy</a></div>
												</div>
												<h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
												<footer>
													<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>1263</div></a>
													<a className="btn btn-primary more" href="single.html">
														<div>More</div>
														<div><i className="ion-ios-arrow-thin-right"></i></div>
													</a>
												</footer>
											</div>
										</div>
									</article>
									<article className="article col-md-12">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img06.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<div className="detail">
													<div className="time">December 22, 2016</div>
													<div className="category"><a href="category.html">Healthy</a></div>
												</div>
												<h2><a href="single.html">Exercitation ullamco laboris nisi ut aliquip</a></h2>
												<p>Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui.</p>
												<footer>
													<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>327</div></a>
													<a className="btn btn-primary more" href="single.html">
														<div>More</div>
														<div><i className="ion-ios-arrow-thin-right"></i></div>
													</a>
												</footer>
											</div>
										</div>
									</article>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="row">
									<article className="article col-md-12">
										<div className="inner">
											<figure>                                
												<a href="single.html">
													<img src="assets/images/news/img05.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<div className="detail">
													<div className="time">December 09, 2016</div>
													<div className="category"><a href="category.html">Lifestyle</a></div>
												</div>
												<h2><a href="single.html">Mauris elementum libero at pharetra auctor</a></h2>
												<p>Vivamus in efficitur mi. Nullam semper justo ut elit lacinia lacinia. className aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
												<footer>
													<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>1083</div></a>
													<a className="btn btn-primary more" href="single.html">
														<div>More</div>
														<div><i className="ion-ios-arrow-thin-right"></i></div>
													</a>
												</footer>
											</div>
										</div>
									</article>
									<article className="article col-md-12">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img07.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<div className="detail">
													<div className="time">December 21, 2016</div>
													<div className="category"><a href="category.html">Sport</a></div>
												</div>
												<h2><a href="single.html">Sed do eiusmod tempor incididunt ut labore</a></h2>
												<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris elementum libero at pharetra auctor.</p>
												<footer>
													<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>980</div></a>
													<a className="btn btn-primary more" href="single.html">
														<div>More</div>
														<div><i className="ion-ios-arrow-thin-right"></i></div>
													</a>
												</footer>
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="banner">
							<a href="#">
								<img src="assets/images/ads.png" alt="Sample Article"/>
							</a>
						</div>
						<div className="line transparent little"></div>
						<div className="row">
							<div className="col-md-6 col-sm-6 trending-tags">
								<h1 className="title-col">Trending Tags</h1>
								<div className="body-col">
									<ol className="tags-list">
										<li><a href="#">HTML5</a></li>
										<li><a href="#">CSS3</a></li>
										<li><a href="#">JavaScript</a></li>
										<li><a href="#">jQuery</a></li>
										<li><a href="#">Bootstrap</a></li>
										<li><a href="#">Responsive</a></li>
										<li><a href="#">AuteIrure</a></li>
										<li><a href="#">Voluptate</a></li>
										<li><a href="#">Veit</a></li>
										<li><a href="#">Reprehenderit</a></li>
									</ol>
								</div>
							</div>
							<div className="col-md-6 col-sm-6">
								<h1 className="title-col">
									Hot News
									<div className="carousel-nav" id="hot-news-nav">
										<div className="prev">
											<i className="ion-ios-arrow-left"></i>
										</div>
										<div className="next">
											<i className="ion-ios-arrow-right"></i>
										</div>
									</div>
								</h1>
								<div className="body-col vertical-slider" data-max="4" data-nav="#hot-news-nav" data-item="article">
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img09.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Lifestyle</a></div>
													<div className="time">December 22, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img01.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Lifestyle</a></div>
													<div className="time">December 22, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img05.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Lifestyle</a></div>
													<div className="time">December 22, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img02.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Travel</a></div>
													<div className="time">December 21, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img13.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">International</a></div>
													<div className="time">December 20, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img08.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Aliquam et metus convallis tincidunt velit ut rhoncus dolor</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Computer</a></div>
													<div className="time">December 19, 2016</div>
												</div>
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="line top">
							<div>Just Another News</div>
						</div>
						<div className="row">
							<article className="col-md-12 article-list">
								<div className="inner">
									<figure>
										<a href="single.html">
											<img src="assets/images/news/img11.jpg" alt="Sample Article"/>
										</a>
									</figure>
									<div className="details">
										<div className="detail">
											<div className="category">
												<a href="#">Film</a>
											</div>
											<div className="time">December 19, 2016</div>
										</div>
										<h1><a href="single.html">Donec consequat arcu at ultrices sodales quam erat aliquet diam</a></h1>
										<p>
										Donec consequat, arcu at ultrices sodales, quam erat aliquet diam, sit amet interdum libero nunc accumsan nisi.
										</p>
										<footer>
											<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>273</div></a>
											<a className="btn btn-primary more" href="single.html">
												<div>More</div>
												<div><i className="ion-ios-arrow-thin-right"></i></div>
											</a>
										</footer>
									</div>
								</div>
							</article>
							<article className="col-md-12 article-list">
								<div className="inner">
									<div className="badge">
										Sponsored
									</div>
									<figure>
										<a href="single.html">
											<img src="assets/images/news/img02.jpg" alt="Sample Article"/>
										</a>
									</figure>
									<div className="details">
										<div className="detail">
											<div className="category">
												<a href="#">Travel</a>
											</div>
											<div className="time">December 18, 2016</div>
										</div>
										<h1><a href="single.html">Maecenas accumsan tortor ut velit pharetra mollis</a></h1>
										<p>
											Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui.
										</p>
										<footer>
											<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>4209</div></a>
											<a className="btn btn-primary more" href="single.html">
												<div>More</div>
												<div><i className="ion-ios-arrow-thin-right"></i></div>
											</a>
										</footer>
									</div>
								</div>
							</article>
							<article className="col-md-12 article-list">
								<div className="inner">
									<figure>
										<a href="single.html">
											<img src="assets/images/news/img03.jpg" alt="Sample Article"/>
										</a>
									</figure>
									<div className="details">
										<div className="detail">
											<div className="category">
											<a href="#">Travel</a>
											</div>
											<div className="time">December 16, 2016</div>
										</div>
										<h1><a href="single.html">Nulla facilisis odio quis gravida vestibulum Proin venenatis pellentesque arcu</a></h1>
										<p>
											Nulla facilisis odio quis gravida vestibulum. Proin venenatis pellentesque arcu, ut mattis nulla placerat et.
										</p>
										<footer>
											<a href="#" className="love active"><i className="ion-android-favorite"></i> <div>302</div></a>
											<a className="btn btn-primary more" href="single.html">
												<div>More</div>
												<div><i className="ion-ios-arrow-thin-right"></i></div>
											</a>
										</footer>
									</div>
								</div>
							</article>
							<article className="col-md-12 article-list">
								<div className="inner">
									<figure>
										<a href="single.html">
											<img src="assets/images/news/img09.jpg" alt="Sample Article"/>
										</a>
									</figure>
									<div className="details">
										<div className="detail">
											<div className="category">
												<a href="#">Healthy</a>
											</div>
											<div className="time">December 16, 2016</div>
										</div>
										<h1><a href="single.html">Maecenas blandit ultricies lorem id tempor enim pulvinar at</a></h1>
										<p>
											Maecenas blandit ultricies lorem, id tempor enim pulvinar at. Curabitur sit amet tortor eu ipsum lacinia malesuada.
										</p>
										<footer>
											<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>783</div></a>
											<a className="btn btn-primary more" href="single.html">
												<div>More</div>
												<div><i className="ion-ios-arrow-thin-right"></i></div>
											</a>
										</footer>
									</div>
								</div>
							</article>
						</div>
					</div>
					<div className="col-xs-6 col-md-4 sidebar" id="sidebar">
						<div className="sidebar-title for-tablet">Sidebar</div>
						<aside>
							<div className="aside-body">
								<div className="featured-author">
									<div className="featured-author-inner">
										<div className="featured-author-cover" style={{ backgroundImage: "url('/assets/images/news/img15.jpg')" }}>
											<div className="badges">
												<div className="badge-item"><i className="ion-star"></i> Featured</div>
											</div>
											<div className="featured-author-center">
												<figure className="featured-author-picture">
													<img src="assets/images/img01.jpg" alt="Sample Article" />
												</figure>
												<div className="featured-author-info">
													<h2 className="name">John Doe</h2>
													<div className="desc">@JohnDoe</div>
												</div>
											</div>
										</div>
										<div className="featured-author-body">
											<div className="featured-author-count">
												<div className="item">
													<a href="#">
														<div className="name">Posts</div>
														<div className="value">208</div>														
													</a>
												</div>
												<div className="item">
													<a href="#">
														<div className="name">Stars</div>
														<div className="value">3,729</div>														
													</a>
												</div>
												<div className="item">
													<a href="#">
														<div className="icon">
															<div>More</div>
															<i className="ion-chevron-right"></i>
														</div>														
													</a>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</aside>
						<aside>
							<h1 className="aside-title">Popular <a href="#" className="all">See All <i className="ion-ios-arrow-right"></i></a></h1>
							<div className="aside-body">
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img07.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
										</div>
									</div>
								</article>
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img14.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
										</div>
									</div>
								</article>
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img09.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">Aliquam et metus convallis tincidunt velit ut rhoncus dolor</a></h1>
										</div>
									</div>
								</article>
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img11.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">dui augue facilisis lacus fringilla pulvinar massa felis quis velit</a></h1>
										</div>
									</div>
								</article>
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img06.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">neque est semper nulla, ac elementum risus quam a enim</a></h1>
										</div>
									</div>
								</article>
								<article className="article-mini">
									<div className="inner">
										<figure>
											<a href="single.html">
												<img src="assets/images/news/img03.jpg" alt="Sample Article"/>
											</a>
										</figure>
										<div className="padding">
											<h1><a href="single.html">Morbi vitae nisl ac mi luctus aliquet a vitae libero</a></h1>
										</div>
									</div>
								</article>
							</div>
						</aside>
						<aside>
							<div className="aside-body">
								<form className="newsletter">
									<div className="icon">
										<i className="ion-ios-email-outline"></i>
										<h1>Newsletter</h1>
									</div>
									<div className="input-group">
										<input type="email" className="form-control email" placeholder="Your mail"/>
										<div className="input-group-btn">
											<button className="btn btn-primary"><i className="ion-paper-airplane"></i></button>
										</div>
									</div>
									<p>By subscribing you will receive new articles in your email.</p>
								</form>
							</div>
						</aside>
						<aside>
							<ul className="nav nav-tabs nav-justified" role="tablist">
								<li className="active">
									<a href="#recomended" aria-controls="recomended" role="tab" data-toggle="tab">
										<i className="ion-android-star-outline"></i> Recomended
									</a>
								</li>
								<li>
									<a href="#comments" aria-controls="comments" role="tab" data-toggle="tab">
										<i className="ion-ios-chatboxes-outline"></i> Comments
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="recomended">
									<article className="article-fw">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img16.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="details">
												<div className="detail">
													<div className="time">December 31, 2016</div>
													<div className="category"><a href="category.html">Sport</a></div>
												</div>
												<h1><a href="single.html">Donec congue turpis vitae mauris</a></h1>
												<p>
													Donec congue turpis vitae mauris condimentum luctus. Ut dictum neque at egestas convallis. 
												</p>
											</div>
										</div>
									</article>
									<div className="line"></div>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img05.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Lifestyle</a></div>
													<div className="time">December 22, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img02.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Travel</a></div>
													<div className="time">December 21, 2016</div>
												</div>
											</div>
										</div>
									</article>
									<article className="article-mini">
										<div className="inner">
											<figure>
												<a href="single.html">
													<img src="assets/images/news/img10.jpg" alt="Sample Article"/>
												</a>
											</figure>
											<div className="padding">
												<h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
												<div className="detail">
													<div className="category"><a href="category.html">Healthy</a></div>
													<div className="time">December 20, 2016</div>
												</div>
											</div>
										</div>
									</article>
								</div>
								<div className="tab-pane comments" id="comments">
									<div className="comment-list sm">
										<div className="item">
											<div className="user">                                
												<figure>
													<img src="assets/images/img01.jpg" alt="User Picture"/>
												</figure>
												<div className="details">
													<h5 className="name">Mark Otto</h5>
													<div className="time">24 Hours</div>
													<div className="description">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit.
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="user">                                
												<figure>
													<img src="assets/images/img01.jpg" alt="User Picture"/>
												</figure>
												<div className="details">
													<h5 className="name">Mark Otto</h5>
													<div className="time">24 Hours</div>
													<div className="description">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit.
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="user">                                
												<figure>
													<img src="assets/images/img01.jpg" alt="User Picture"/>
												</figure>
												<div className="details">
													<h5 className="name">Mark Otto</h5>
													<div className="time">24 Hours</div>
													<div className="description">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</aside>
						<aside>
							<h1 className="aside-title">Videos
								<div className="carousel-nav" id="video-list-nav">
									<div className="prev"><i className="ion-ios-arrow-left"></i></div>
									<div className="next"><i className="ion-ios-arrow-right"></i></div>
								</div>
							</h1>
							<div className="aside-body">
								<ul className="video-list" data-youtube='"carousel":true, "nav": "#video-list-nav"'>
									<li><a data-youtube-id="SBjQ9tuuTJQ" data-action="magnific"></a></li>
									<li><a data-youtube-id="9cVJr3eQfXc" data-action="magnific"></a></li>
									<li><a data-youtube-id="DnGdoEa1tPg" data-action="magnific"></a></li>
								</ul>
							</div>
						</aside>
						<aside id="sponsored">
							<h1 className="aside-title">Sponsored</h1>
							<div className="aside-body">
								<ul className="sponsored">
									<li>
										<a href="#">
											<img src="assets/images/sponsored.png" alt="Sponsored"/>
										</a>
									</li> 
									<li>
										<a href="#">
											<img src="assets/images/sponsored.png" alt="Sponsored"/>
										</a>
									</li> 
									<li>
										<a href="#">
											<img src="assets/images/sponsored.png" alt="Sponsored"/>
										</a>
									</li> 
									<li>
										<a href="#">
											<img src="assets/images/sponsored.png" alt="Sponsored"/>
										</a>
									</li> 
								</ul>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>

		<section className="best-of-the-week">
			<div className="container">
				<h1><div className="text">Best Of The Week</div>
					<div className="carousel-nav" id="best-of-the-week-nav">
						<div className="prev">
							<i className="ion-ios-arrow-left"></i>
						</div>
						<div className="next">
							<i className="ion-ios-arrow-right"></i>
						</div>
					</div>
				</h1>
				<div className="owl-carousel owl-theme carousel-1">
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img03.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
										<div className="time">December 11, 2016</div>
										<div className="category"><a href="category.html">Travel</a></div>
								</div>
								<h2><a href="single.html">tempor interdum Praesent tincidunt</a></h2>
								<p>Praesent tincidunt, leo vitae congue molestie.</p>
							</div>
						</div>
					</article>
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img16.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
									<div className="time">December 09, 2016</div>
									<div className="category"><a href="category.html">Sport</a></div>
								</div>
								<h2><a href="single.html">Maecenas porttitor sit amet turpis a semper</a></h2>
								<p> Proin vulputate, urna id porttitor luctus, dui augue facilisis lacus.</p>
							</div>
						</div>
					</article>
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img15.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
									<div className="time">December 26, 2016</div>
									<div className="category"><a href="category.html">Lifestyle</a></div>
								</div>
								<h2><a href="single.html">Fusce ac odio eu ex volutpat pellentesque</a></h2>
								<p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
							</div>
						</div>
					</article>
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img14.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
									<div className="time">December 26, 2016</div>
									<div className="category"><a href="category.html">Travel</a></div>
								</div>
								<h2><a href="single.html">Nulla facilisis odio quis gravida vestibulum</a></h2>
								<p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
							</div>
						</div>
					</article>
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img01.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
									<div className="time">December 26, 2016</div>
									<div className="category"><a href="category.html">Travel</a></div>
								</div>
								<h2><a href="single.html">Fusce Ullamcorper Elit At Felis Cursus Suscipit</a></h2>
								<p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
							</div>
						</div>
					</article>
					<article className="article">
						<div className="inner">
							<figure>
								<a href="single.html">
									<img src="assets/images/news/img11.jpg" alt="Sample Article"/>
								</a>
							</figure>
							<div className="padding">
								<div className="detail">
									<div className="time">December 26, 2016</div>
									<div className="category"><a href="category.html">Travel</a></div>
								</div>
								<h2><a href="single.html">Donec consequat arcu at ultrices sodales</a></h2>
								<p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
    </>
  );
}
