import React from 'react';
import { Grid, Divider } from '@material-ui/core';

export default function AboutUs() {
  return (
    <>
      <h2>History</h2>
      <Divider />
<p>WMF was originally called Metallwarenfabrik Straub & Schweizer and was opened as a metal repairing workshop. Through mergers and acquisitions, by 1900 they were the world's largest producer and exporter of household metalware, mainly in the Jugendstil, or Art Nouveau style, designed in the WMF Art Studio under Albert Mayer, sculptor and designer, who was director from 1884 to 1914.</p>
      <p>In 1880 after Metallwarenfabrik Straub & Schweizer merged with another German company, it was renamed as the Württembergische Metallwarenfabrik. WMF acquired the Polish metalware factory Plewkiewicz in Warsaw in 1886, which then became a subsidiary of WMF around 1900. During this period, the WMF employed over 3500 people. In 1890 they acquired the Kunstanstalt für Galvanoplastik München, which specialized in electrotyping and electroforming of statues and statuettes for buildings, fountains, tombstones, and gardens; this became the Abteilung für Galvanoplastik (Galvanoplastic Division) of WMF During the 1920s, Abteilung für Galvanoplastic was producing reproductions of large-scale Italian Renaissance bronze works for an American clientele. Albert Weiblen Marble & Granite Co., Inc. of New Orleans pursued the acquisition of a gilt copper reproduction of Ghiberti's "Gates of Paradise". In 1910, the Reale Istituto di Belle Arti had granted WMF the exclusive right to take a sharp cast of the original doors, from which WMF created a reproduction that was exhibited at the International Building Trades Exhibition in Leipzig (1913) WMF produced a trilingual catalog about the doors, titled Erztüre des Hauptportals am Baptisterium in Florenz.</p>
      <p>In 1900, WMF acquired Albert Köhler's famous Austrian metalwork company AK & CIE, who produced and distributed WMF items under their mark to the Austria-Hungarian market until about 1914. WMF purchased Orivit AG, a company known for its Jugendstil pewter in 1905, followed a year later by the purchase of the Orion Kunstgewerbliche Metallwarenfabrik, another German metalware company. WMF continued to use the goods from the acquired companies on their own markets, and conversely, they produced and distributed their objects under their acquired companies brands. One other brand they acquired was Radivon Bucarest, a company founded by medalist Theodor Radivon, producing identical art nouveau metal wares under the WMF name with the same model numbers.</p>
      <p>In 1955, WMF started production of commercial coffee machines. These products were designed for restaurants, military mess halls, cruise ships and other commercial applications.</p>

       <p> Kohlberg Kravis Roberts acquired the company in 2014 and sold it to Groupe SEB in 2016.</p>
      <h2>Brands and companies</h2>
      <Divider />
      <p>Some WMF stainless products produced in Germany after World War II are called "Fraser's WMF" because they were distributed in the United States by Fraser's Ltd. of New York, a retail outlet founded by Gordon Freeman Fraser in Berkeley, CA, in 1947. Fraser's grew to become a division of WMF of America, Inc., a subsidiary of WMF AG. With the death of Gordon Fraser in 2005, Fraser's ceased to exist, and WMF products are now distributed in the U.S. by WMF Americas Group of North Carolina.</p>
      <p>Since 1998 the German cooking pan manufacturer Silit also belongs to the WMF Group. Silit is still marketed as an independent brand. In 2002, the range of products is rounded off by the acquisition of Kaiser Backformen.</p>
      <h2>About Us</h2>
      <Divider />
      <p>Every day, more than 100 million people around the world use products from WMF, Silit and Kaiser to prepare, cook, bake, eat and drink in their homes. And when they are not doing that, they are enjoying coffee specialities and foods prepared by the hotel and catering industry using WMF, Schaerer or Hepp products. Our employees are passionate about bringing people together, whether at home, on the move or at fine-dining establishments, in order to give them shared moments that are both precious and delicious. All this with products which have outstanding design, perfect functionality and excellent quality to make every culinary experience a real joy. Our business has a long tradition, having been founded in Geislingen an der Steige in 1853, and has been part of the French Groupe SEB since the end of 2016.</p>
      <Divider />
      <h2>WMF Design – Winner of multiple awards</h2>
      <Divider />
      <Grid container>
        <Grid item md={6}>
          <img src={`${process.env.PUBLIC_URL}/img/about/awards.jpg`} alt="Our rewards" style={{width: '100%'}} />
          {/*<div  style={{width: '100%',height: '100%', backgroundAttachment: 'fixed', backgroundImage: `url(${process.env.PUBLIC_URL}/img/about/awards.jpg)`}}> </div>*/}
        </Grid>
        <Grid item md={6}>
          <p>Design has always been an integral part of WMF's corporate philosophy. The products are designed to be distinctive. Today, WMF's internal creative team works in close cooperation with renowned international designers from many different disciplines. The company takes a holistic approach to design, combining aesthetics, function and usability, while always focusing on the customer. WMF products are intended to make preparing, cooking, eating and drinking an emotional experience for customers. WMF’s success in this is shown in the numerous design awards that the company receives year after year.</p>
        </Grid>
      </Grid>


    </>
  )
}