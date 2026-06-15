import { Helmet } from "react-helmet";
const MetaHelmet = ({ title, description }) => {
  return (
    <Helmet>
                  <title>{title}</title>
                  
      {/* {description && <meta name="description" content={description} />} */}
              
    </Helmet>
  );
};

export default MetaHelmet;
