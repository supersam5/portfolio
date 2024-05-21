import React from "react";
import { motion } from "framer-motion";



const BackgroundCogs = () => {
    return (
        <div className="background-cogs">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="cog1"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="cog2"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="cog3"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="cog-wheel"
            >
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 392.663 392.663" xml:space="preserve">
<g>
	<g>
		<path d="M239.515,249.826l-22.044-14.481c-0.905-2.392-1.939-4.849-3.038-7.24l5.301-25.859c0.776-3.62-0.388-7.37-2.909-9.891
			L200.469,176c-2.651-2.651-6.335-3.685-9.891-2.909l-25.859,5.301c-2.392-1.099-4.848-2.133-7.24-3.038l-14.545-22.044
			c-2.004-3.103-5.43-4.913-9.115-4.913h-23.079c-3.62,0-7.111,1.875-9.115,4.913l-14.545,22.044
			c-2.392,0.905-4.849,1.939-7.24,3.038l-25.859-5.301c-3.556-0.711-7.37,0.388-9.891,2.909l-16.356,16.356
			c-2.651,2.651-3.685,6.335-2.909,9.891l5.301,25.859c-1.164,2.392-2.133,4.848-3.038,7.24L4.978,249.826
			C1.875,251.83,0,255.257,0,258.941v23.079c0,3.62,1.875,7.111,4.978,9.115l22.044,14.481c0.905,2.392,1.939,4.849,3.038,7.24
			l-5.301,25.859c-0.776,3.62,0.388,7.37,2.909,9.891l16.356,16.356c2.651,2.651,6.335,3.685,9.891,2.909l25.859-5.301
			c2.392,1.099,4.848,2.133,7.24,3.038l14.545,22.044c2.004,3.103,5.43,4.978,9.115,4.978h23.079c3.62,0,7.111-1.875,9.115-4.978
			l14.545-22.044c2.392-0.905,4.849-1.939,7.24-3.038l25.859,5.301c3.556,0.711,7.37-0.388,9.891-2.909l16.356-16.356
			c2.651-2.651,3.685-6.335,2.909-9.891l-5.301-25.859c1.164-2.392,2.133-4.848,3.038-7.24l22.044-14.545
			c3.103-2.004,4.913-5.43,4.913-9.115v-23.079C244.493,255.257,242.618,251.83,239.515,249.826z M222.772,276.202h-0.065
			l-20.17,13.317c-2.069,1.422-3.62,3.426-4.396,5.689c-1.228,3.814-2.844,7.564-4.784,11.378c-1.099,2.263-1.487,4.719-0.905,7.111
			l4.913,23.725l-8.016,8.016l-23.725-4.913c-2.392-0.453-4.913-0.129-7.176,0.905c-3.814,1.939-7.628,3.556-11.378,4.784
			c-2.327,0.776-4.396,2.327-5.689,4.396l-13.317,20.17h-11.378l-13.317-20.17c-1.422-2.069-3.426-3.62-5.689-4.396
			c-3.814-1.228-7.628-2.844-11.378-4.784c-2.263-1.099-4.719-1.487-7.176-0.905l-23.725,4.913l-8.081-8.081l4.978-23.725
			c0.453-2.392,0.129-4.978-0.905-7.176c-1.939-3.814-3.556-7.628-4.719-11.378c-0.776-2.327-2.327-4.396-4.396-5.689l-20.17-13.317
			v-11.378l20.17-13.317c2.069-1.422,3.62-3.426,4.396-5.689c1.228-3.814,2.844-7.564,4.784-11.378
			c1.099-2.263,1.487-4.719,0.905-7.111l-4.913-23.661l8.016-8.016l23.725,4.913c2.392,0.453,4.978,0.129,7.176-0.905
			c3.814-1.939,7.564-3.556,11.378-4.784c2.327-0.776,4.396-2.327,5.689-4.396l13.317-20.17h11.378l13.317,20.17
			c1.422,2.069,3.426,3.62,5.689,4.396c3.814,1.228,7.628,2.844,11.378,4.784c2.263,1.099,4.719,1.487,7.176,0.905l23.725-4.913
			l8.016,8.016l-4.913,23.725c-0.453,2.392-0.129,4.913,0.905,7.111c1.939,3.814,3.556,7.628,4.719,11.378
			c0.776,2.392,2.327,4.396,4.396,5.689l20.234,13.317V276.202z"/>
	</g>
</g>
<g>
	<g>
		<path d="M122.311,221.705c-26.893,0-48.743,21.85-48.743,48.743c0,26.893,21.85,48.743,48.743,48.743s48.743-21.851,48.743-48.743
			S149.204,221.705,122.311,221.705z M122.311,297.406c-14.804,0-26.958-12.154-26.958-26.958c0-14.869,12.154-26.958,26.958-26.958
			s26.958,12.154,26.958,26.958C149.204,285.382,137.115,297.406,122.311,297.406z"/>
	</g>
</g>
<g>
	<g>
		<path d="M387.685,79.483L371.2,68.687c-0.517-1.487-1.164-2.909-1.875-4.331l4.008-19.329c0.776-3.62-0.388-7.37-2.909-9.891
			l-12.671-12.671c-2.651-2.651-6.335-3.685-9.891-2.909l-19.394,3.814c-1.487-0.646-2.909-1.228-4.331-1.875L313.341,5.01
			c-2.004-3.103-5.43-4.978-9.115-4.978H286.19c-3.62,0-7.111,1.875-9.115,4.978l-10.796,16.485
			c-1.487,0.517-2.909,1.164-4.331,1.875l-19.329-4.008c-3.556-0.776-7.37,0.388-9.891,2.909l-12.671,12.671
			c-2.651,2.651-3.685,6.335-2.909,9.891l4.008,19.329c-0.646,1.487-1.228,2.909-1.875,4.331l-16.485,10.796
			c-3.103,2.004-4.913,5.43-4.913,9.115v18.036c0,3.62,1.875,7.111,4.913,9.115l16.485,10.796c0.517,1.487,1.164,2.909,1.875,4.331
			l-4.008,19.329c-0.776,3.62,0.388,7.37,2.909,9.891l12.671,12.735c2.651,2.651,6.335,3.685,9.891,2.909l19.329-4.008
			c1.487,0.646,2.909,1.228,4.331,1.875l10.796,16.485c2.004,3.103,5.43,4.913,9.115,4.913h18.036c3.62,0,7.111-1.875,9.115-4.913
			l10.796-16.485c1.487-0.517,2.909-1.164,4.396-1.875l19.329,4.008c3.62,0.711,7.37-0.388,9.891-2.909l12.671-12.735
			c2.65-2.651,3.685-6.335,2.909-9.891l-4.008-19.329c0.646-1.487,1.228-2.909,1.875-4.396l16.485-10.796
			c3.103-2.004,4.978-5.43,4.978-9.115V88.339C392.598,84.913,390.723,81.552,387.685,79.483z M371.006,100.622h-0.194v0.065
			l-14.61,9.568c-2.069,1.422-3.62,3.426-4.396,5.689c-0.905,2.78-2.069,5.624-3.556,8.469c-1.164,2.263-1.487,4.719-0.905,7.176
			l3.556,17.131l-4.396,4.396l-17.131-3.556c-2.392-0.453-4.913-0.129-7.176,0.905c-2.844,1.487-5.689,2.651-8.469,3.556
			c-2.392,0.776-4.396,2.327-5.689,4.396l-9.632,14.675h-6.206l-9.568-14.61c-1.422-2.069-3.426-3.62-5.689-4.396
			c-2.78-0.905-5.624-2.069-8.469-3.556c-2.263-1.164-4.719-1.487-7.176-0.905l-17.131,3.556l-4.396-4.396l3.556-17.131
			c0.453-2.392,0.129-4.913-0.905-7.111c-1.487-2.844-2.65-5.689-3.556-8.469c-0.776-2.327-2.327-4.396-4.396-5.689l-14.675-9.762
			v-6.206l14.61-9.568c2.069-1.422,3.62-3.426,4.396-5.689c0.905-2.78,2.069-5.624,3.556-8.469c1.164-2.263,1.487-4.719,0.905-7.176
			l-3.556-17.131l4.396-4.396l17.131,3.556c2.392,0.453,4.913,0.129,7.111-0.905c2.844-1.487,5.689-2.651,8.469-3.556
			c2.327-0.776,4.396-2.327,5.689-4.396l9.568-14.61h6.206l9.568,14.61c1.422,2.069,3.426,3.62,5.689,4.396
			c2.78,0.905,5.624,2.069,8.469,3.556c2.133,1.164,4.719,1.487,7.111,0.905l17.131-3.556l4.396,4.396l-3.232,17.131
			c-0.453,2.392-0.129,4.978,1.034,7.176c1.487,2.78,2.651,5.624,3.556,8.469c0.776,2.392,2.327,4.396,4.396,5.689l14.61,9.568
			V100.622z"/>
	</g>
</g>
<g>
	<g>
		<path d="M295.176,57.244c-22.238,0-40.339,18.101-40.339,40.339c0,22.238,18.101,40.339,40.339,40.339
			c22.238,0,40.339-18.101,40.339-40.339C335.515,75.345,317.414,57.244,295.176,57.244z M295.176,116.137
			c-10.214,0-18.554-8.339-18.554-18.554c0-10.214,8.339-18.554,18.554-18.554c10.214,0,18.554,8.339,18.554,18.554
			C313.729,107.798,305.39,116.137,295.176,116.137z"/>
	</g>
</g>
</svg>
            </motion.div>
        </div>
    );
};

export default BackgroundCogs;