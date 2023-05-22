import clsx from 'clsx';

import banner from './assets/banner.svg';

const App = () => {
	return (
		<div className='flex justify-center pt-[100px]'>
			<div className='px-[10px] flex items-center gap-[168px]'>
				<div>
					<img
						src={banner}
						alt=''
					/>
				</div>
				<div>
					<div className='mb-16'>
						<p className='font-[700] text-[64px] leading-[64px] text-right text-[#240D57]'>Imagine if</p>
						<p className={clsx(['font-[700] text-[64px] leading-[64px] text-right bg'])}>Snapchat</p>
						<p className='font-[700] text-[64px] leading-[64px] text-right text-[#240D57]'>had events</p>
					</div>
					<div className='mb-[52px]'>
						<p className='font-[300] text-[24px] text-[#4F4F4F] leading-[28px]'>
							Easily host and share events with your friends
						</p>
						<p className='font-[300] text-[24px] text-[#4F4F4F] leading-[28px]'>across any social media.</p>
					</div>
					<div>
						<div className='flex justify-end'>
							<button className='font-[700] text-[20px] leading-[23px] text-white'>🎉 Create my event</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
