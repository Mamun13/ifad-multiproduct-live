import Image from "next/image";
import ValuePicOne from "../../../public/values/1.png"
import ValuePicTwo from "../../../public/values/2.png"
import ValuePicThree from "../../../public/values/3.png"
import ValuePicFour from "../../../public/values/4.png"
import ValuePicFive from "../../../public/values/5.png"
import ValuePicSix from "../../../public/values/6.png"
import ValuePicSeven from "../../../public/values/7.png"

const Values = () => {
	return (
		<>
		<div>
			<div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
				<div className="timeline__event__icon">
					{/* <!-- <i className="lni-sport"></i>--> */}

				</div>
				<div className="timeline__event__date">
					<Image src={ValuePicOne} alt="" height={80} width={80}/>
				</div>
				<div className="timeline__event__content">
					<div className="timeline__event__title">
						<h3 className='text-capitalize theme-color'>consumer/customer focus</h3>
					</div>
					<div className="timeline__event__description">
						<p>Keeping consumers at the forefront of all our actions and decisions.</p>
					</div>
				</div>
			</div>

	{/* <!--third--> */}

	<div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
		<div className="timeline__event__icon">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicTwo} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>innovative</h3>
			</div>
			<div className="timeline__event__description">
				<p>Continuously innovate products to stay ahead of time.</p>
			</div>

		</div>
	</div>

	{/* <!--forth--> */}

	<div className="timeline__event animated fadeInUp timeline__event--type1">
		<div className="timeline__event__icon">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicThree} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>quality first</h3>
			</div>
			<div className="timeline__event__description">
				<p>Maintain highest quality standard of product services and prople.</p>
			</div>
		</div>
	</div>

	{/* <!--first--> */}
	<div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
		<div className="timeline__event__icon ">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicFour} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content ">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>process driven</h3>
			</div>
			<div className="timeline__event__description">
				<p>Develop and adhere process in all aspects of business operation.</p>
			</div>
		</div>
	</div>

	{/* <!--second--> */}

	<div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
		<div className="timeline__event__icon">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicFive} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>accountability</h3>
			</div>
			<div className="timeline__event__description">
				<p>prople are empowered and accountable for deliverables</p>
			</div>
		</div>
	</div>

	{/* <!--third--> */}

	<div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
		<div className="timeline__event__icon">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicSix} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>integrity</h3>
			</div>
			<div className="timeline__event__description">
				<p>Maintain highest level of honesty and transparency.</p>
			</div>

		</div>
	</div>

	{/* <!--forth--> */}

	<div className="timeline__event animated fadeInUp timeline__event--type1">
		<div className="timeline__event__icon">
			{/* <!-- <i className="lni-sport"></i>--> */}

		</div>
		<div className="timeline__event__date">
					<Image src={ValuePicSeven} alt="" height={80} width={80}/>
		</div>
		<div className="timeline__event__content">
			<div className="timeline__event__title">
				<h3 className='text-capitalize theme-color'>passionate team</h3>
			</div>
			<div className="timeline__event__description">
				<p>Work as a winning collaborative and passionate team in driving excellence.</p>
			</div>
		</div>
	</div>

	

	

</div>
		</>
	);
};

export default Values;
