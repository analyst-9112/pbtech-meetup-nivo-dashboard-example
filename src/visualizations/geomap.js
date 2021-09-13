import React from 'react';
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import WorldCountries from './worldCountries.json'


export default () => (
    <ResponsiveChoropleth
        data={data}
        features={[WorldCountries]}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    
);

const data = [
    {
      "id": "AFG",
      "value": 481655
    },
    {
      "id": "AGO",
      "value": 512804
    },
    {
      "id": "ALB",
      "value": 770864
    },
    {
      "id": "ARE",
      "value": 819522
    },
    {
      "id": "ARG",
      "value": 638856
    },
    {
      "id": "ARM",
      "value": 605580
    },
    {
      "id": "ATA",
      "value": 756930
    },
    {
      "id": "ATF",
      "value": 2628
    },
    {
      "id": "AUT",
      "value": 419902
    },
    {
      "id": "AZE",
      "value": 760160
    },
    {
      "id": "BDI",
      "value": 3113
    },
    {
      "id": "BEL",
      "value": 489708
    },
    {
      "id": "BEN",
      "value": 852649
    },
    {
      "id": "BFA",
      "value": 870346
    },
    {
      "id": "BGD",
      "value": 797331
    },
    {
      "id": "BGR",
      "value": 335703
    },
    {
      "id": "BHS",
      "value": 606411
    },
    {
      "id": "BIH",
      "value": 937397
    },
    {
      "id": "BLR",
      "value": 590305
    },
    {
      "id": "BLZ",
      "value": 562483
    },
    {
      "id": "BOL",
      "value": 644311
    },
    {
      "id": "BRN",
      "value": 306346
    },
    {
      "id": "BTN",
      "value": 288067
    },
    {
      "id": "BWA",
      "value": 543265
    },
    {
      "id": "CAF",
      "value": 982554
    },
    {
      "id": "CAN",
      "value": 114050
    },
    {
      "id": "CHE",
      "value": 901167
    },
    {
      "id": "CHL",
      "value": 552006
    },
    {
      "id": "CHN",
      "value": 158453
    },
    {
      "id": "CIV",
      "value": 147167
    },
    {
      "id": "CMR",
      "value": 788262
    },
    {
      "id": "COG",
      "value": 153916
    },
    {
      "id": "COL",
      "value": 323880
    },
    {
      "id": "CRI",
      "value": 136098
    },
    {
      "id": "CUB",
      "value": 910040
    },
    {
      "id": "-99",
      "value": 929533
    },
    {
      "id": "CYP",
      "value": 205369
    },
    {
      "id": "CZE",
      "value": 734319
    },
    {
      "id": "DEU",
      "value": 908515
    },
    {
      "id": "DJI",
      "value": 451161
    },
    {
      "id": "DNK",
      "value": 565592
    },
    {
      "id": "DOM",
      "value": 990779
    },
    {
      "id": "DZA",
      "value": 312083
    },
    {
      "id": "ECU",
      "value": 851686
    },
    {
      "id": "EGY",
      "value": 973447
    },
    {
      "id": "ERI",
      "value": 435143
    },
    {
      "id": "ESP",
      "value": 631901
    },
    {
      "id": "EST",
      "value": 505433
    },
    {
      "id": "ETH",
      "value": 389630
    },
    {
      "id": "FIN",
      "value": 897520
    },
    {
      "id": "FJI",
      "value": 902029
    },
    {
      "id": "FLK",
      "value": 446331
    },
    {
      "id": "FRA",
      "value": 724724
    },
    {
      "id": "GAB",
      "value": 7558
    },
    {
      "id": "GBR",
      "value": 640910
    },
    {
      "id": "GEO",
      "value": 232242
    },
    {
      "id": "GHA",
      "value": 49795
    },
    {
      "id": "GIN",
      "value": 586375
    },
    {
      "id": "GMB",
      "value": 628884
    },
    {
      "id": "GNB",
      "value": 459183
    },
    {
      "id": "GNQ",
      "value": 318115
    },
    {
      "id": "GRC",
      "value": 755872
    },
    {
      "id": "GTM",
      "value": 265232
    },
    {
      "id": "GUY",
      "value": 327738
    },
    {
      "id": "HND",
      "value": 813
    },
    {
      "id": "HRV",
      "value": 602197
    },
    {
      "id": "HTI",
      "value": 390416
    },
    {
      "id": "HUN",
      "value": 148726
    },
    {
      "id": "IDN",
      "value": 530760
    },
    {
      "id": "IND",
      "value": 245648
    },
    {
      "id": "IRL",
      "value": 991694
    },
    {
      "id": "IRN",
      "value": 105965
    },
    {
      "id": "IRQ",
      "value": 225676
    },
    {
      "id": "ISL",
      "value": 927939
    },
    {
      "id": "ISR",
      "value": 815966
    },
    {
      "id": "ITA",
      "value": 11053
    },
    {
      "id": "JAM",
      "value": 400427
    },
    {
      "id": "JOR",
      "value": 93741
    },
    {
      "id": "JPN",
      "value": 433573
    },
    {
      "id": "KAZ",
      "value": 931864
    },
    {
      "id": "KEN",
      "value": 818229
    },
    {
      "id": "KGZ",
      "value": 675496
    },
    {
      "id": "KHM",
      "value": 921515
    },
    {
      "id": "OSA",
      "value": 526897
    },
    {
      "id": "KWT",
      "value": 800327
    },
    {
      "id": "LAO",
      "value": 20442
    },
    {
      "id": "LBN",
      "value": 197928
    },
    {
      "id": "LBR",
      "value": 491481
    },
    {
      "id": "LBY",
      "value": 888267
    },
    {
      "id": "LKA",
      "value": 920698
    },
    {
      "id": "LSO",
      "value": 265589
    },
    {
      "id": "LTU",
      "value": 400274
    },
    {
      "id": "LUX",
      "value": 727004
    },
    {
      "id": "LVA",
      "value": 519346
    },
    {
      "id": "MAR",
      "value": 407520
    },
    {
      "id": "MDA",
      "value": 508855
    },
    {
      "id": "MDG",
      "value": 896545
    },
    {
      "id": "MEX",
      "value": 934060
    },
    {
      "id": "MKD",
      "value": 78191
    },
    {
      "id": "MLI",
      "value": 515945
    },
    {
      "id": "MMR",
      "value": 913920
    },
    {
      "id": "MNE",
      "value": 310321
    },
    {
      "id": "MNG",
      "value": 234978
    },
    {
      "id": "MOZ",
      "value": 411957
    },
    {
      "id": "MRT",
      "value": 825438
    },
    {
      "id": "MWI",
      "value": 849254
    },
    {
      "id": "MYS",
      "value": 5874
    },
    {
      "id": "NAM",
      "value": 77269
    },
    {
      "id": "NCL",
      "value": 376051
    },
    {
      "id": "NER",
      "value": 20552
    },
    {
      "id": "NGA",
      "value": 51766
    },
    {
      "id": "NIC",
      "value": 77861
    },
    {
      "id": "NLD",
      "value": 13975
    },
    {
      "id": "NOR",
      "value": 77097
    },
    {
      "id": "NPL",
      "value": 105870
    },
    {
      "id": "NZL",
      "value": 340984
    },
    {
      "id": "OMN",
      "value": 212935
    },
    {
      "id": "PAK",
      "value": 175037
    },
    {
      "id": "PAN",
      "value": 940986
    },
    {
      "id": "PER",
      "value": 624152
    },
    {
      "id": "PHL",
      "value": 6304
    },
    {
      "id": "PNG",
      "value": 865883
    },
    {
      "id": "POL",
      "value": 157340
    },
    {
      "id": "PRI",
      "value": 453134
    },
    {
      "id": "PRT",
      "value": 718287
    },
    {
      "id": "PRY",
      "value": 320323
    },
    {
      "id": "QAT",
      "value": 185973
    },
    {
      "id": "ROU",
      "value": 549780
    },
    {
      "id": "RUS",
      "value": 883984
    },
    {
      "id": "RWA",
      "value": 574634
    },
    {
      "id": "ESH",
      "value": 269458
    },
    {
      "id": "SAU",
      "value": 42654
    },
    {
      "id": "SDN",
      "value": 631201
    },
    {
      "id": "SDS",
      "value": 532263
    },
    {
      "id": "SEN",
      "value": 349582
    },
    {
      "id": "SLB",
      "value": 267306
    },
    {
      "id": "SLE",
      "value": 222005
    },
    {
      "id": "SLV",
      "value": 519399
    },
    {
      "id": "ABV",
      "value": 759459
    },
    {
      "id": "SOM",
      "value": 727158
    },
    {
      "id": "SRB",
      "value": 702546
    },
    {
      "id": "SUR",
      "value": 614470
    },
    {
      "id": "SVK",
      "value": 265070
    },
    {
      "id": "SVN",
      "value": 992248
    },
    {
      "id": "SWZ",
      "value": 447483
    },
    {
      "id": "SYR",
      "value": 402422
    },
    {
      "id": "TCD",
      "value": 665003
    },
    {
      "id": "TGO",
      "value": 151696
    },
    {
      "id": "THA",
      "value": 371878
    },
    {
      "id": "TJK",
      "value": 396166
    },
    {
      "id": "TKM",
      "value": 5127
    },
    {
      "id": "TLS",
      "value": 541739
    },
    {
      "id": "TTO",
      "value": 581734
    },
    {
      "id": "TUN",
      "value": 892339
    },
    {
      "id": "TUR",
      "value": 318738
    },
    {
      "id": "TWN",
      "value": 38582
    },
    {
      "id": "TZA",
      "value": 407177
    },
    {
      "id": "UGA",
      "value": 173722
    },
    {
      "id": "UKR",
      "value": 223940
    },
    {
      "id": "URY",
      "value": 194413
    },
    {
      "id": "USA",
      "value": 733114
    },
    {
      "id": "UZB",
      "value": 223949
    },
    {
      "id": "VEN",
      "value": 829038
    },
    {
      "id": "VNM",
      "value": 109153
    },
    {
      "id": "VUT",
      "value": 26369
    },
    {
      "id": "PSE",
      "value": 629777
    },
    {
      "id": "YEM",
      "value": 486983
    },
    {
      "id": "ZAF",
      "value": 618662
    },
    {
      "id": "ZMB",
      "value": 200375
    },
    {
      "id": "ZWE",
      "value": 42606
    },
    {
      "id": "KOR",
      "value": 464200
    }
  ];

