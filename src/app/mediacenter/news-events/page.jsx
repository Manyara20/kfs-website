"use client";
import React, { useState } from "react";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { useRouter } from "next/navigation";

const NewsandEvents = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const zigzagData = [
    {
      title: "FKF-CFA PAYS CCF A COURTESY CALL",
      text: "The CCF Mr. Alex Lemarkoko, has today been paid a courtesy call by Friends of Karura Community Forest Association (FKF-CFA) officials led by Cristina Boelcke, the two teams explored areas of common interests in the management and development of the Karura Forest ecosystem. The discussions centered on infrastructure development within Karura forest, increase in seedlings […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448638908_856950539798958_73282423479938082_n-768x527.jpg",
      author: "By Admin",
      date: "March 15, 2025",
      comments: "12 Comments",
      reverse: false,
      id: 1,
    },
    {
      title: "Kenya Space Expo and Conference 2024",
      text: "Kenya Forest Service is currently participating at the Kenya Space Expo and Conference 2024 organised by the Kenya Space Agency at Edge Convention Center, Nairobi. The conference aptly themed Space and Technologies for societal Benefits seeks to demonstrate the utility of space science and technologies and how these can be leveraged for improvement of societal […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448669343_856946449799367_3057193342022004114_n-768x512.jpg",
      author: "By Admin",
      date: "April 10, 2025",
      comments: "8 Comments",
      reverse: true,
      id: 2,
    },
    {
      id: 3,
      title: "CCF Hosts African Development Bank Representative",
      text: "Learn how top CEOs and managers lead successful teams in a changing world.",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448538348_856834363143909_1199152150830954646_n-768x527.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 4,
      title: "17th June the World marked World Day to Combat Desertification and Drought (WDDD)",
      text: "17th June the World marked World Day to Combat Desertification and Drought (WDDD). The Chief Conservator of Forests (CCF) Mr. Alex Lemarkoko accompanied the Cabinet Secretary Ministry of Environment, Climate Change and Forestry Hon Soipan Tuya when she presided over the national celebrations at Olkinyei Grounds, Maiyanat Community Conservancy in Doldol, Nanyuki, Laikipia County. The […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448538272_856223783204967_1948945570565621335_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 5,
      title: "LAUNCH OF PFMP FOR KITALE TOWNSHIP FOREST STATION",
      text: "Kenya Forest Service launched Participatory Forest Management Plans and signed Forest Management Agreements with Kitale Township Community Forest Associations. The ceremony held at the KFS County Office Ground, in Tranzoia County was officiated by Anthony Musyoka , Regional Forest Consevator for North Rift, representing the Chief Conservator of Forests. PFMP’s put communities adjacent to forest […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448397406_854457203381625_3447459298235842185_n-768x553.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 6,
      title: "",
      text: "Kenya Forest Service in partnership with JICA is implementing the Project for Strengthening Forestry Sector Development and Community Resilience to Climate Change Through Sustainable Forest Management and Landscape Restoration (SFS-CORECC) in promoting commercial forestry by supporting farmers in 8 ASAL counties to plant Melia volkensii (Mukau). Melia volkensii has been identified as a favorable drought-resistant […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448433039_854350123392333_8622137157694976074_n-768x431.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 7,
      title: "KFS and NRT Sign MoU to Enhance Conservation Efforts in Kenya",
      text: "Kenya Forest Service (KFS) and Northern Rangelands Trust (NRT) have signed a Memorandum of Understanding (MoU) at the NRT headquarters in Lewa Conservancy to formalize their long-standing partnership in conservation efforts across Kenya. The Chief Conservator of Forests, Alex Lemarkoko, acknowledged the challenges in managing forests and the importance of bringing together stakeholders, partners, and […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448435260_854343170059695_4117562599724328245_n-768x440.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 8,
      title: "",
      text: "The Chairman of Kenya Forest Service (KFS) Mr. Titus Korir, recently visited Kapsorok Ngeny’ Community Forest which is part of the Soin Sigowet’s natural environment in Soin Ward and is one of the unique ecosystems with diverse flora and fauna in Kericho County. The Chairman who was accompanied by the CEC for Water and Environment […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448358790_854265436734135_5484027519296913182_n-768x575.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 9,
      title: "Tracking Tree Growing Activities.",
      text: "Kenya Forest Service continues tree growing activities taking advantage of the long rains season across the country. His Excellency President William Ruto led tree growing exercise in Meru County where 14,700 tree seedlings were planted. The President was in Meru to commission the construction of Mitunguu animal feed factory. In Mau and North Rift Conservancy […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448463550_854123993414946_590348111952176675_n-768x513.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 10,
      title: "DRYLANDS FORESTRY WORKSHOP IN KITUI COUNTY",
      text: "ASALs will deliver 5.2 million hectares of the 10.6 million hectares envisaged in the 15 billion trees campaign. In addition, Agroforestry on farms will account for 3 million hectares. This translates to 83.6% of the total area that will be grown with trees by 2032. It is for this reasons that a strategy workshop targeting […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448321955_853738616786817_7902595964012633178_n-768x576.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 11,
      title: "RANGERS HOUSES UNVEILED IN KIBWEZI FOREST",
      text: "The Chief Conservator of Forests Mr Alex Lemarkoko has today officially opened Kibwezi Forest station offices and Rangers houses funded by Kenya Railways at a cost of Ksh 36 million. Accompanied by the Kenya Railways Manager Eng Shimrone Munga, the CCF inspected the infrastructure that includes fencing, office block and residential buildings. During construction of […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448355754_853665906794088_8594716271579967198_n-768x576.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 12,
      title: "3rd Regional Research Conference",
      text: "Officers from the Forest Survey and Information Systems (FSIM) are currently participating at the 3rd Regional Research Conference at the Kenya School of Government. The Cabinet Secretary for Information, Communication and The Digital Economy Hon. Eliud Owalo, FIHRM, EGH opened the conference and reiterated the importance of digitization of land governance and emphasized on the […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448238005_853043470189665_2320576710795960191_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 13,
      title: "EXPLORING SUSTAINABLE WATER RESOURCE MANAGEMENT.",
      text: "The Deputy CCF in-charge of Plantation Management and Inventory, Mr. Andrew Soi, has today on behalf of the CCF met a team from Western Kenya Water Project (WKWP). The team is seeking KFS support in Water Resource Management to enhance sector coordination toward the realisation of sustainable water resources management. This targets the Lake Victoria […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448178882_852532640240748_8987183863684819661_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 14,
      title: "THE LAUNCH OF NDARAGWA AND OLBOLLOSAT PFMPS",
      text: "Kenya Forest Service launched Participatory Forest Management Plans and signed Forest Management Agreements with Ndaragwa and OlBollosat Community Forest Associations. The ceremony held at OlBollosat Forest Station in Nyandarua County was officiated by Jerome Mwanzia, Project Manager of GZDSP II, representing the Chief Conservator of Forests. During the ceremony, Mr.Mwanzia highlighted the project’s role in […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448207097_852498030244209_7275197870940475124_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 15,
      title: "",
      text: "The CCF, Mr. Alex Lemarkoko joined, Ministry of Environment, Climate Change and Forestry, Cabinet Secretary Hon. Soipan Tuya and Attorney General Hon. J.B. Muturi at Kona Baridi in Ngong Forest, Kajiado County for a tree growing exercise. Over 6,000 tree seedlings were planted, adding up to a total of 754,810 trees grown so far across […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448161423_851851330308879_7754616745960228738_n-768x552.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 16,
      title: "",
      text: "The Chief Conservator of Forests, Alex Lemarkoko, officially flagged off four heavy-duty motor vehicles at the Kenya Forest Service (KFS) Headquarters. These vehicles, procured through the Green Zones Development Support Project Phase II, mark a significant boost to KFS’s operational capabilities. Addressing those gathered, the Chief Conservator of Forests reminded everyone of the importance of […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448122319_851683716992307_565238374964326274_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 17,
      title: "",
      text: "The CS Ministry of Environment, Climate Change and Forestry Hon. Soipan Tuya opened a senior staff meeting bringing together members of KFS senior management team, Regional and County Forest Conservators. Hon. Tuya commended the officers for great performance in the long rains tree growing. She emphasized that the enormous task that the service bears in […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/448029676_849948850499127_7890452699565699449_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 18,
      title: "",
      text: "The Kenya Forest Service (KFS) Board Chairman Mr.Titus Korir, embarked on a significant visit to several parks under the management of KFS. This visit aimed to assess the state of these natural reserves and underscored the importance of sustainable management practices for Kenya’s biodiversity hotspots. Accompanied by representatives including Boniface Ndirangu the CFA treasurer who […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447963231_849384813888864_8177749962382373407_n-768x432.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 19,
      title: "KFS hosts the Second Lady Her Excellency Dr Pastor Dorcas Rigathi to Mark World Environment Day.",
      text: "It was pomp and color as KFS hosted Her Excellency the Second Lady Dr. Pastor Dorcas Rigathi to tree planting, games and fun activities to mark the World Environment Day at Karura Forest, KFS headquarters. Received by the Board Chairman Mr Titus Korir, Her Excellency led participants in planting 350 tree seedlings and further donating […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447638080_848690580624954_6944074077103267642_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 20,
      title: "",
      text: "Happening now Her Excellency The Second Lady Pastor Dorcas Rigathi is visiting KFS to mark the World Environment Day. The Second Lady is expected to plant more than 300 seedlings with the Special Olympics Kenya Team at Karura Forest. She was received at KFS HQ by the Board Chairman Mr. Titus Korir, Principal CCF Charity […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447778661_848533767307302_4968141702086437466_n-768x671.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 21,
      title: "World Environment Day",
      text: "World Environment Day celebrated annually on June 5th, is a global event organized by the United Nations to raise awareness about the importance of environmental protection and sustainable living. One of the most effective ways to celebrate this day is by planting trees. Trees are essential for maintaining the balance of our ecosystem and provide […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447634088_848441123983233_1849452498928405496_n-724x1024.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 22,
      title: "PROTECTION OF CRUCIAL ECOSYSTEMS RECEIVES MAJOR BOOST, AS WETLANDS INTERNATIONAL GIFTS KFS ALERT SYSTEM…",
      text: "Mangrove Ecosystems and Wetlands are vital ecosystems that support biodiversity, clean water, and climate resilience. The Service received a major boost towards implementing its mandate of protecting and reserving these crucial ecosystems for achievement of #SDG15 & sustainable future. This follows donation of forest alert systems equipment from Wetlands International (WI) received by KFS, Commandant, […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447777227_848090260684986_8532803443370240325_n-768x472.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 23,
      title: "",
      text: "The Chief Conservator of Forests Mr Alex Lemarkoko visited Cherengani Forest station in Elgeyo Marakwet County, to assess a shooting incident that occurred last night leading to the unfortunate demise of two Forest Rangers and injury to one more. The injured Forest Ranger is recuperating in hospital. The suspected assailant later on turned the weapon […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447616331_847464434080902_3155425841780268210_n-768x496.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 25,
      title: "",
      text: "The CS for Agriculture Hon. Mithika Linturi and Forestry PS, Gitonga Mugambi, led tree growing exercise in Meru County. A total of 15.6 million trees have been grown, since the beginning of weekly planting by the Cabinet. The CS noted that he was impressed with KFS performance in leading the 15 billion tree growing exercise […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447689163_847450590748953_5360434867250783283_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 26,
      title: "2024 RHINO CHARGE RAISES OVER 300 MILLION FOR CONSERVATION…",
      text: "In a remarkable display of solidarity for forest and wildlife conservation, the 2024 Rhino Charge has concluded with resounding success, raising over 300 million Kenya Shillings. The event, organized by the Rhino Ark Charitable Trust, saw participants and sponsors alike rally behind the noble cause of protecting endangered species and vital ecosystems. Established in 1988 […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447702269_847185140775498_2380436835602372517_n-768x511.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 27,
      title: "MADARAKA DAY CELEBRATIONS 2024",
      text: "The President of the Republic of Kenya His Excellency Dr. William Ruto led the nation in commemoration of Madaraka Day held at the Masinde Muliro Stadium in Bungoma County. This years celebration was marked under the theme; ‘Agriculture and Food Security. During his address, the President noted that change in weather patterns and climatic conditions […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/447515291_846299884197357_626977475598039928_n-768x577.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 28,
      title: "COLLABORATING TO ENHANCE TIMBER TRACKING",
      text: "The Chief Conservator of Forests (CCF) Mr. Alex Lemarkoko  held discussions in his office with officers from Traffic International East Africa and Tanzania Forest Service (TFS) on the piloting of a timber tracking system in Kenya to enhance chain of custody and traceability of timber products in the country. This is following the introduction of […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/441866778_844945297666149_5670726440965539458_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 29,
      title: "KFS Meru County Participates in Meru ASK Show- 2024",
      text: "This year’s Meru ASK show was marked under the theme “Promoting Climate Smart and Trade Initiatives for Sustainable Economic Growth”. The County Forestry Office exhibited the various agroforestry programmes such fodder banks,nitrogen fixing plants, PELIS system and diverse seedling production for various rehabilitation programmes to support the 15 billion tree growing program with emphasis on […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/447004554_844388987721780_1410989263713859985_n-768x576.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 30,
      title: "",
      text: "The Cabinet Secretary Ministry of Environment, Climate Change, and Forestry Hon. Soipan Tuya joined the Cabinet Ministry of Defence (MoD) Hon. Aden Duale in a tree planting event at Embakasi Garrison, Nairobi County. Over 30,000 tree seedlings were planted during the event. The Kenya Defence Forces was simultaneously planting trees across the country as the […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/447021794_844356754391670_5797433879506864540_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 31,
      title: "KFS & DRSRS MEET DISCUSS DATA MANAGEMENT",
      text: "Directorate of Resource Surveys and Remote Sensing (DRSRS) team led by Deputy Director, Geo-information, Ms. Lucy Njino paid the Service a courtesy call, to discuss; Forest Assessments and National Forest Monitoring Systems. The two teams also discussed possibility of collaborating in the forthcoming 3rd Regional Research Conference on Data, Innovation and Technology for Land Governance. […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/447011104_844235077737171_4885297692010116604_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 32,
      title: "",
      text: "Kenya Forest Service Kinale hosted a delegation from African Development Bank(AfDB) and the National Treasury for a tree planting event at Kinale Forest Station, Kiambu County. The AfDB team, led by their First Lady Grace Adasina and Nancy Ndungu, planted 60 ceremonial trees each representing an African state and partner states as part of an […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/447004586_843866411107371_6401616353362453521_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 33,
      title: "",
      text: "KFS hosted the French Ambassador His Excellency Anauld Suguet and his team from the embassy at the Mau Regional Conservancy office at Nakuru. The Ambassador and his team assessed the progress of the fire project activities at the Service that have been funded by the French Government. During the visit, he was shown the the […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/445034749_843591927801486_8200863996708668315_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 34,
      title: "NRT SEEEKS PARTNERSHIP WITH KFS IN COASTAL TERRESTRIAL CARBON PROJECT",
      text: "NRT SEEEKS PARTNERSHIP WITH KFS IN COASTAL TERRESTRIAL CARBON PROJECT The CCF Mr. Alex Lemarkoko hosted team from the Northern Rangeland Trust (NRT) and The Nature Conservancy (TNC) at KFS headquarters led by NRT Technical Adviser, Ms. Juliet King , the team is seeking to partner with the Service in a carbon project that targets […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/445066742_843196504507695_5006624721720386633_n-768x396.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 35,
      title: "",
      text: "UNODC and Kenya Forest Service Collaborate to Enhance Integrity with Policy Handover Ceremony. In a significant step towards bolstering integrity and transparency within the Kenya Forest Service (KFS), the Chief Conservator of Forests (CCF) Mr. Alex Lemarkoko, led a ceremony to officiate the handover of three crucial policy documents, the event marked the transfer of […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/445066703_843183651175647_788357935974992215_n-768x345.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 36,
      title: "STAKEHOLDERS GIVE FEEDBACK ON PROPOSED KAPTAGAT FENCING",
      text: "The Kenya Forest Service (KFS) has conducted a series of Public Participation Meetings from May 20th to May 24th, 2024, regarding the proposed Solar Electric Fence Project for the conservation of the Kaptagat Ecosystem. The objectives of the forums which were spearheaded by the Head of Watersheds Mr. Benedict Omondi and the North Rift Regional […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/444149847_841976687963010_5226508474417126514_n-768x576.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
    {
      id: 37,
      title: "PS LEADS TREE GROWING EXERCISE IN KIRISIA FOREST",
      text: "It was the culmination of week 3 of the accelerated tree growing exercise that was ordered by his Excellency the President to hasten the attainment of a 30% tree cover by 2032 through the growing of 15 billion trees. The tree growing exercise took place at Kirisia Forest Station in Samburu County and was presided […]",
      image:  "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/444138145_841292314698114_6820832052217174877_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: true,
    },
    {
      id: 38,
      title: "",
      text: "It was the culmination of week 3 of the accelerated tree growing exercise that was ordered by his Excellency the President to hasten the attainment of a 30% tree cover by 2032 through the growing of 15 billion trees. The tree growing exercise took place at Kirisia Forest Station in Samburu County and was presided […]",
      image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/444203569_841253321368680_8143420657370366021_n-768x512.jpg",
      author: "By Admin",
      date: "May 5, 2025",
      comments: "15 Comments",
      reverse: false,
    },
  ];

  const totalPages = Math.ceil(zigzagData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLearnMore = (id) => {
    router.push(`/mediacenter/news-events/${id}`);
  };

  const currentItems = zigzagData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <TopNavBar />
      <MainNavBar />
      {currentItems.map((item, index) => (
        <ZigzagSection
          key={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
          author={item.author}
          date={item.date}
          comments={item.comments}
          reverse={item.reverse}
          onLearnMore={() => handleLearnMore(item.id)}
        />
      ))}
      <div className="flex justify-center items-center my-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 ${
              currentPage === page ? "bg-green-500" : "bg-gray-800"
            } text-white rounded-full hover:bg-green-600 transition duration-300 text-sm`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
        >
          →
        </button>
      </div>
      <FooterBottom />
    </>
  );
};

const ZigzagSection = ({
  title,
  text,
  image,
  author,
  date,
  comments,
  reverse,
  onLearnMore,
}) => {
  return (
    <section
      className={`container mx-auto px-4 py-6 flex flex-col md:flex-row items-center gap-4 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2">
        <img src={image} alt={title} className="rounded-lg shadow-md w-full h-auto" />
      </div>
      <div className="md:w-1/2 text-black">
        <h2 className="text-xl font-bold font-peugeot text-emerald-950" style={{ textTransform: "capitalize" }}>{title}</h2>
        <p className="mt-2 text-sm font-peugeot">{text}</p>
        <div className="flex items-center font-bold gap-4 text-xs text-black my-2">
          <a href="/author-profile" className="flex items-center gap-1 hover:underline hover:text-green-500 font-peugeot">
            <Image src="/icons/user.png" alt="Author" width={14} height={14} />
            {author}
          </a>
          <a href="/events-calendar" className="flex items-center gap-1 hover:underline hover:text-green-500 font-peugeot">
            <Image src="/icons/calendar.png" alt="Date" width={14} height={14} />
            {date}
          </a>
          <a href="/comments-section" className="flex items-center gap-1 hover:underline hover:text-green-500 font-peugeot">
            <Image src="/icons/comment.png" alt="Comments" width={14} height={14} />
            {comments}
          </a>
        </div>
        <button
          onClick={onLearnMore}
          className="mt-4 bg-emerald-950 text-white px-4 py-1 text-sm font-peugeot hover:bg-green-500 transition duration-300"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default NewsandEvents;