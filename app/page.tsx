"use client";

import { MdVerified } from "react-icons/md";

import DownChevron from "./components/DownChevron";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
	0: { items: 3.3 },
};

// for stories
const users = [
	{
		id: "0",
		imageUrl: "/insta-pics/users/me.png",
		username: "",
	},
	{
		id: "1",
		imageUrl: "/insta-pics/users/turst.png",
		username: "mikethurston",
	},

	{
		id: "2",
		imageUrl: "/insta-pics/users/glu.png",
		username: "glucosegoddess",
	},

	{
		id: "3",
		imageUrl: "/insta-pics/users/uncom.png",
		username: "uncommonsensefitness",
	},

	{
		id: "5",
		imageUrl: "/insta-pics/users/mcloud.png",
		username: "mccloud",
	},

	{
		id: "6",
		imageUrl: "/insta-pics/users/rob.png",
		username: "roblipsett",
	},

	{
		id: "7",
		imageUrl: "/insta-pics/users/remell.png",
		username: "remellgains",
	},
];

const feed = [
	{
		id: "0",
		user: {
			id: "1",
			username: "musclefitbasics",
			imageUrl: "/insta-pics/users/dan.png",
			isVerified: true,
		},
		likesCount: "17.5K",
		commentsCount: "194",
		shareCount: "631",
		imageUrl: "/insta-pics/posts/feed-1.png",
		caption: "Once you try these t-shirts...",
	},
	{
		id: "1",
		user: {
			id: "1",
			username: "thedankoe",
			imageUrl: "/insta-pics/users/dan.png",
			isVerified: true,
		},
		likesCount: "10.5K",
		commentsCount: "103",
		shareCount: "1,692",
		imageUrl: "/insta-pics/posts/dan-koe-post-1.png",
		caption: "The Paradox Of Productivity...",
	},
	{
		id: "2",
		user: {
			id: "2",
			username: "naval",
			imageUrl: "/insta-pics/users/naval.png",
			isVerified: false,
		},
		likesCount: "12.5K",
		commentsCount: "184",
		shareCount: "2,911",
		imageUrl: "/insta-pics/posts/naval-post-1.png",
		caption: "The importance of solitude",
	},
	{
		id: "3",
		user: {
			id: "3",
			username: "valuevisualized",
			imageUrl: "/insta-pics/users/vv.png",
			isVerified: false,
		},
		likesCount: "7.7K",
		commentsCount: "124",
		shareCount: "1,241",
		imageUrl: "/insta-pics/posts/vv-post-1.png",
		caption: "Rule your mind...",
	},
];

export default function Home() {
	const renderUsers = () => {
		return users.map((user, i) => {
			// current user profile
			if (i === 0) {
				return (
					<div
						className="flex flex-col justify-center items-center cursor-pointer relative bottom-[-4px] left-[-12px]"
						key={user.id}
					>
						<div className="rounded-full relative flex justify-center items-center">
							<div className="w-[20px] h-[20px] rounded-full bg-gray-800 absolute top-[28px] right-[-5px] text-[14px] text-white font-semibold flex items-center justify-center">
								<span className="relative top-[-1px] right-[-0.5px]">+</span>
							</div>

							<img
								src={user.imageUrl}
								className="w-[52px] h-[52px] rounded-full relative cursor-pointer border-[3px] border-white !-z-10"
								draggable="false"
							/>
						</div>
						<p className="text-[8px] mt-[5px] ">Your story</p>
					</div>
				);
			} else {
				return (
					<div
						className="flex flex-col items-center justify-center relative left-[-12px]"
						key={user.id}
					>
						<div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full p-[3px]">
							<img
								src={user.imageUrl}
								className="w-[50px] h-[50px] rounded-full relative cursor-pointer border-[3px] border-white z-50"
								draggable="false"
							/>
						</div>

						<p className="text-[8px] mt-[5px] text-center">
							<span>
								{user.username.length <= 15
									? user.username
									: user.username.slice(0, 12) + "..."}
							</span>
						</p>
					</div>
				);
			}
		});
	};

	const renderPosts = () => {
		return feed.map((post, i) => {
			return (
				<div
					className={`w-[100%] relative ${i !== 0 ? "mt-[20px]" : ""}`}
					key={post.id}
				>
					{/* post header */}
					<div className="flex justify-between items-center pb-[4px]">
						{/* left */}
						<div className="flex gap-1 cursor-pointer">
							<img
								src={post.user.imageUrl}
								className="w-[20px] h-[20px] border-[1px] rounded-full"
								draggable="false"
							/>
							<p className="text-[10px] font-semibold flex items-center gap-1">
								<span>{post.user.username}</span>
								<MdVerified className="text-theme-blue" />
							</p>
						</div>

						{/* right */}
						<div>
							<img
								src={`/insta-pics/insta-dots.png`}
								className="w-[14px] h-[14px] cursor-pointer"
								draggable="false"
							/>
						</div>
					</div>
					<div className="relative left-[-16px] w-[calc(100%+31px)] h-[80%] border-[1px] ">
						<img
							src={post.imageUrl}
							className="w-[100%] h-[280px] object-cover"
							draggable="false"
						/>
					</div>

					{/* post item actions */}
					<div className="mt-[10px] flex justify-between">
						{/* left */}
						<div className="flex gap-3 items-center">
							{/* likes */}
							<div className="text-[10px] flex items-center gap-1 font-medium cursor-pointer">
								<img
									src={`/insta-pics/insta-heart.png`}
									className="w-[16px] h-[16px]"
								/>{" "}
								<span>{post.likesCount}</span>
							</div>

							{/* comments */}
							<div className="text-[10px] flex items-center gap-1 font-medium cursor-pointer">
								<img
									src={`/insta-pics/insta-chat.png`}
									className="w-[18px] h-[18px]"
								/>{" "}
								<span>{post.commentsCount}</span>
							</div>

							{/* shared */}
							<div className="text-[10px] flex items-center gap-1 font-medium cursor-pointer">
								<img
									src={`/insta-pics/insta-send.png`}
									className="w-[15px] h-[15px]"
								/>{" "}
								<span>{post.shareCount}</span>
							</div>
						</div>
						{/* end left */}

						{/* right */}
						<div>
							<div className="text-[10px] flex items-center justify-center cursor-pointer">
								<img
									src={`/insta-pics/insta-bookmark.png`}
									className="w-[16px] h-[16px]"
								/>{" "}
							</div>
						</div>

						{/* end right */}
					</div>
					{/* end post item actions */}

					{/* caption */}
					<div className="text-[9px] mt-[8px]">
						<span className="font-semibold mr-1 cursor-pointer">
							{post.user.username}
						</span>
						<span>{post.caption}</span>
						<div>
							<button className="text-gray-500 cursor-pointer">more</button>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<main className="">
				{/* content here */}
				<div className="content scrollbar-hide border-[2px] border-orange-500 z-50 bg-orange-300 relative">
					{/* HEADER */}

					{/* header container */}
					<div className="flex justify-between items-center">
						{/* left */}
						<div className="flex items-center cursor-pointer">
							<img src="/insta-pics/insta-logo.png" className="w-[80px]" />
							<DownChevron />
						</div>

						{/* right */}
						<div className="flex gap-4">
							<img
								src="/insta-pics/insta-heart.png"
								className="w-[18px] h-[18px] cursor-pointer"
							/>
							<img
								src="/insta-pics/insta-send.png"
								className="w-[18px] h-[18px] cursor-pointer"
							/>
						</div>
					</div>

					{/* STORIES */}
					<div className="mt-[20px] flex relative pb-[6px] overflow-visible">
						<AliceCarousel
							ssrSilentMode={true}
							mouseTracking
							responsive={responsive}
							disableButtonsControls
							disableDotsControls
						>
							{renderUsers()}
						</AliceCarousel>

						{/* divider */}
						<div className="w-[150%] h-[1px] left-[-100px] bg-gray-200 absolute bottom-[-4px]"></div>
					</div>
					{/* END STORIES */}

					{/* FEED */}
					<div className="mt-4">{renderPosts()}</div>
					{/* end FEED */}
					{/* divider */}

					<div className="relative">
						<div className="bg-gray-100 h-[1px] w-[200%] relative left-[-100px]" />
					</div>

					{/* Bottom tab navigation */}

					<div className="sticky bottom-[0px] pt-[5px] pb-[5px] px-[12px]  flex justify-between items-center  translate-y-3 bg-white">
						<img
							src={`/insta-pics/insta-home.png`}
							className="w-[18px] cursor-pointer"
						/>
						<img
							src={`/insta-pics/insta-search.png`}
							className="w-[16px] cursor-pointer"
						/>
						<img
							src={`/insta-pics/insta-add.png`}
							className="w-[18px] cursor-pointer"
						/>
						<img
							src={`/insta-pics/insta-reels.png`}
							className="w-[18px] cursor-pointer"
						/>
						<div className="w-[20px] h-[20px] cursor-pointer rounded-full overflow-hidden">
							<img src={`/insta-pics/users/me.png`} />
						</div>
					</div>

					{/* End Bottom tab navigation */}
				</div>
				{/* end content here */}

				{/* Iphone Wrapper */}
				<img src="/apple-iphone-15-black-portrait.png" width="300px" />
			</main>
		</div>
	);
}
