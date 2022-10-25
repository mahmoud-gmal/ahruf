const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
});

/**
 * Get Products.
 *
 * Endpoint /api/get-product-categories/ or '/api/get-product-categories?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req, res) {
	
	const responseData = {
		success: false,
		categories: []
	}
	
    // check if parameter 'per_page' exist or not
	const { perPage } = req?.query ?? {};
	
	try {
		const { data } = await api.get(
			'products/categories',
			{
				per_page: perPage || 50
			}
		);
		
		responseData.success = true;
		responseData.categories = data;
		
		res.json( responseData );
		
	} catch ( error ) {
		responseData.error = error.message;
		res.status( 500 ).json( responseData  );
	}
}