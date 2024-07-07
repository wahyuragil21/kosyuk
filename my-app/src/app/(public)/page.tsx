'use client'
import CardProduct from "@/components/cardProduct";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/skeleton";
import { useEffect, useState } from "react";

export default function ProductPage() {
        const products = [
          {
            "_id": "1",
            "name": "Air Jordan Legacy 312 Low",
            "slug": "air-jordan-legacy-312-low",
            "description": "Celebrate MJ's legacy with this shout-out to Chicago's 312 area code. With elements from three iconic Jordans (the AJ3, AJ1 and Air Alpha Force), it's a modern mash-up that reps the best.",
            "excerpt": "Celebrate MJ's legacy with this shout-out to Chicago's 312 area code.",
            "price": 2199000,
            "tags": [ "AJ3", "AJ1", "Air Alpha Force"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/yolsgjl5vhbgjt6v1jfl/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/rcrzrsqnkt7vgde4hhpo/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/k9whulrzshjzp4awaptk/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ctue0ifn2qxajcrttdiz/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/pneixtrnk7wiz3uxwcgr/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/12f67694-230c-40b1-9201-3addbedf4110/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c23733f9-a066-4393-9abf-553ba8085744/air-jordan-legacy-312-low-shoes-6Vd4Xl.png"
    
            ],
            "createdAt": "2024-01-10T15:32:06.350Z",
            "updatedAt": "2024-01-10T14:47:12.101Z"
          },
          {
            "_id": "2",
            "name": "Jordan Spizike Low Chinese New Year",
            "slug": "jordan-spizike-low-chinese-new-year",
            "description": "The Spizike takes elements of four classic Jordans, combines them and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?",
            "excerpt": "The Spizike takes elements of four classic Jordans, combines them and gives you one iconic sneaker.",
            "price": 2669000,
            "tags": ["Spike", "Chiness", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/611b45d1-81a7-4c45-a419-adf54f65c48d/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4a15f8ae-7d8d-48b5-b5d8-049b6b90c479/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/386c125f-3780-4866-8f9c-ee4244655dda/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26572c52-b3f9-4d4a-84eb-eb42e79a3e17/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/64e2aaa2-088e-40ac-853d-1b97383099dc/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f1340ad8-be85-48ef-85c1-bed515c58564/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/975be59c-dfab-46c0-83ac-ab5dce6c9a9f/jordan-spizike-low-chinese-new-year-shoes-LNdJ8J.png"
            ],
            "createdAt": "2024-01-10T15:32:06.350Z",
            "updatedAt": "2024-01-10T18:19:54.047Z"
          },
          {
            "_id": "3",
            "name": "Air Jordan Stadium 90",
            "slug": "air-jordan-stadium-90",
            "description": "Comfort is king, but that doesn't mean you have to sacrifice style. Taking design inspiration from the AJ1 and AJ5, the Stadium 90 is ready for everyday wear. The upper is made from synthetic leather and textiles, sporting a combination of the AJ1 toe box and flame details from the AJ5. Nike Air cushioning makes every step as effortless as your style.",
            "excerpt": "Comfort is king, but that doesn't mean you have to sacrifice style.",
            "price": 219900,
            "tags": ["Stadium", "90", "Formula"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/766b057f-9403-4f0d-90eb-5be0a1d56b6b/jordan-stadium-90-shoes-vnsjwJ.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d2f93be0-b2d1-4326-a225-8119ea190872/jordan-stadium-90-shoes-vnsjwJ.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e24dda2d-9e5d-4f1e-8eb9-043a9e082bf7/jordan-stadium-90-shoes-vnsjwJ.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c5327dce-d611-4022-accc-c816c5688e63/jordan-stadium-90-shoes-vnsjwJ.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/450142ad-a661-431b-b266-17b727160b65/jordan-stadium-90-shoes-vnsjwJ.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7973e337-e3bb-44a3-9354-bd55e6a8dd09/jordan-stadium-90-shoes-vnsjwJ.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c50d4681-dd74-447a-a603-cc4244a864f5/jordan-stadium-90-shoes-vnsjwJ.png"
            ],
            "createdAt": "2024-01-10T03:01:50.432Z",
            "updatedAt": "2023-01-10T16:42:21.208Z"
          },
          {
            "_id": "4",
            "name": "Air Jordan 3 Retro",
            "slug": "air-jordan-3-retro",
            "description": "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—is combined with visible Nike Air in the sole to make a comfortable, everyday icon.",
            "excerpt": "Clean and supreme, the AJ3 returns with all of its classic style and grace.",
            "price": 3269000,
            "tags": ["Jordan", "Retro", "White"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d60813e8-8cb1-4a4d-912e-a9b35b4cdd5f/air-jordan-3-retro-shoes-TJf2lm.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/82fbf807-af52-47ca-96bd-a5fd59dbbbd2/air-jordan-3-retro-shoes-TJf2lm.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/02e51f3f-b50c-4ef0-9efa-dc4001660f17/air-jordan-3-retro-shoes-TJf2lm.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/487c3b6e-eec2-4db2-912e-a856a2943758/air-jordan-3-retro-shoes-TJf2lm.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3657befc-fbdd-47b6-9c20-5d80eabbc70f/air-jordan-3-retro-shoes-TJf2lm.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0fd566ce-bb2a-4e61-8a99-4b1c55792bc5/air-jordan-3-retro-shoes-TJf2lm.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fd9398f-c605-4cac-855d-a876d2943672/air-jordan-3-retro-shoes-TJf2lm.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "5",
            "name": "Air Jordan Jumpman MVP",
            "slug": "air-jordan-jumpman-mvp",
            "description": "We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.",
            "excerpt": "We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer.",
            "price": 2629000,
            "tags": ["Jumpman", "Mvp", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-JV1HCs.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ede48e2-7cfa-4a17-8ccf-f0ae3f851a46/jumpman-mvp-shoes-JV1HCs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/632afcc5-6b53-4098-8f8e-32c6ad3e5d7f/jumpman-mvp-shoes-JV1HCs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/411ef2f8-8bcc-4dd9-bc25-d8616645cb05/jumpman-mvp-shoes-JV1HCs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/97cabcd2-3ede-4fba-b296-34803908e4ca/jumpman-mvp-shoes-JV1HCs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a944913-d49d-431a-a19f-153b347a42a3/jumpman-mvp-shoes-JV1HCs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a944913-d49d-431a-a19f-153b347a42a3/jumpman-mvp-shoes-JV1HCs.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "6",
            "name": "Air Jordan 2 Low 'Origins'",
            "slug": "air-jordan-2-low-origins",
            "description": "Wear a shoe with over 30 years of a legacy that remains fresh to this day. Making its debut in 1986, the AJ2 was the cool younger sibling of its famous predecessor—a sleeker and more pared-down version of the iconic AJ1. With premium leather and an Air-Sole unit underfoot, this throwback serves up the ultimate combo of wearability and style.",
            "excerpt": "Wear a shoe with over 30 years of a legacy that remains fresh to this day.",
            "price": 2489000,
            "tags": ["Low", "Origins", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c4f5ba23-50cf-4741-a579-569be693222b/air-jordan-2-low-origins-shoes-DcLNNF.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7e3bc744-fa10-401d-b036-eb0fbdebd0ba/air-jordan-2-low-origins-shoes-DcLNNF.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d280a752-8a89-417e-b634-838440e85799/air-jordan-2-low-origins-shoes-DcLNNF.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d642cdd-b485-4569-9e5a-8af54ba6c62d/air-jordan-2-low-origins-shoes-DcLNNF.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dd6a1131-b715-4544-b82b-f8113de3b061/air-jordan-2-low-origins-shoes-DcLNNF.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29d72dcc-98a9-4d6c-84b0-83ab2355ddff/air-jordan-2-low-origins-shoes-DcLNNF.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5c5ca943-ba77-454e-907a-0787cc63a91d/air-jordan-2-low-origins-shoes-DcLNNF.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "7",
            "name": "Air Jordan 1 Mid SE",
            "slug": "air-jordan-1-mid-se",
            "description": "Grown-ups can inspire some amazing drip. With pastel pink textiles and a sweet floral pattern, these mid tops pay homage to the wallpaper in MJ's mum's house.",
            "excerpt": "Grown-ups can inspire some amazing drip.",
            "price": 999000,
            "tags": ["Mid", "SE", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae4af5cb-0cfb-4435-abda-5803777e46a0/jordan-1-mid-se-younger-shoes-QHdwpV.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f2c0f1c8-b48e-4aeb-90f1-45eb421d07e6/jordan-1-mid-se-younger-shoes-QHdwpV.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc60bfcb-150b-4851-9204-ba16cc1fb6a4/jordan-1-mid-se-younger-shoes-QHdwpV.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6e3e9c4a-a1bd-483d-8b9b-b6f3f0034075/jordan-1-mid-se-younger-shoes-QHdwpV.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1df5515c-4607-41de-91b8-cce2e5285a23/jordan-1-mid-se-younger-shoes-QHdwpV.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1df5515c-4607-41de-91b8-cce2e5285a23/jordan-1-mid-se-younger-shoes-QHdwpV.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5b9068e9-7ce4-4bd4-9d20-7640e69bb73c/jordan-1-mid-se-younger-shoes-QHdwpV.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "8",
            "name": "Air Jordan 1 Mid Alt",
            "slug": "air-jordan-1-mid-alt",
            "description": "We've got a feeling your kid is going to love the pretty pastels on these Js. And we think you'll like the hook-and-loop easy-entry system, too. Once it's on, it's built to last—so they can hop, hop, hop as long as they like.",
            "excerpt": "We've got a feeling your kid is going to love the pretty pastels on these Js.",
            "price": 999000,
            "tags": ["Mid", "Alt", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a58d290-ec66-4268-8b4e-7f00172e28d2/jordan-1-mid-alt-younger-shoes-7DtswX.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/66e8235b-ecfe-45e1-8212-79a20b4d84cd/jordan-1-mid-alt-younger-shoes-7DtswX.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d9bc91b8-a801-4bfd-bcf4-a7d59802967c/jordan-1-mid-alt-younger-shoes-7DtswX.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a5dc179-1df0-4736-9844-4aa11dff22bf/jordan-1-mid-alt-younger-shoes-7DtswX.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dd7950d4-6515-4709-aedc-b21e526236eb/jordan-1-mid-alt-younger-shoes-7DtswX.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1a4ce921-6282-45b4-992d-5f646474e35c/jordan-1-mid-alt-younger-shoes-7DtswX.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "9",
            "name": "Air Jordan Nu Retro 1 Low",
            "slug": "air-jordan-nu-retro-1-low",
            "description": "Pulled out of the vault, these low tops are back. Inspired by the original Wings logo and design of the AJ1, these all-day, everyday shoes are ready for whatever. Smooth leather uppers and a big embossed logo will help you stand out, however you style 'em.",
            "excerpt": "Pulled out of the vault, these low tops are back.",
            "price": 1199000,
            "tags": ["Nu", "Retro", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb28cc90-ee52-41a9-adeb-bc625285c195/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/def14037-7275-4e1c-9ee5-c5f86d2350aa/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/edd2df44-ae76-44d5-888a-5dd0a72e4488/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/56721eb8-3e14-442e-bb37-0585a8c1a3a1/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8be5d9fa-0d59-4e64-9c90-e17746a7a276/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd9cc91e-559c-47be-b983-8de74165367f/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c7a9d92b-2673-423f-a189-3c0604d8fce3/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "10",
            "name": "Nike Air Max 90",
            "slug": "nike-air-max-90",
            "description": "Nothing as fly, nothing as comfortable, nothing as proven. The Air Max 90 stays true to its original running roots with a Waffle sole and visible cushioning. This edition pairs aged neutrals with collegiate colours for a fresh look.",
            "excerpt": "Nothing as fly, nothing as comfortable, nothing as proven.",
            "price": 1129000,
            "tags": ["Nike", "Air", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bb28cc90-ee52-41a9-adeb-bc625285c195/jordan-nu-retro-1-low-older-shoes-tsJ6f8.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4bc5cd7-37d2-42e2-9a5e-07232e76b9e1/air-max-90-shoes-PKcwg7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ed5ac8b-83f3-4269-b7ba-7724f8e28740/air-max-90-shoes-PKcwg7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/796d0a13-86b4-4b56-9a5c-168787d3c2da/air-max-90-shoes-PKcwg7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/618f770e-d2a9-4a72-826c-4768d9104209/air-max-90-shoes-PKcwg7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97779d4a-5e5e-487d-ba85-4efda643049e/air-max-90-shoes-PKcwg7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/590afee4-10d8-406f-b6d3-b822305832c7/air-max-90-shoes-PKcwg7.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "11",
            "name": "Air Jordan 3 Retro",
            "slug": "air-jordan-3-retro",
            "description": "Bold colours and classic details give the AJ3 a fun, throwback look. It's modelled after Mike's game shoe from the '80s, so you'll be walking in the footsteps of a legend.",
            "excerpt": "Bold colours and classic details give the AJ3 a fun, throwback look.",
            "price": 2229000,
            "tags": ["Retro", "Older", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3ca75dfc-d78e-49e6-bdee-44201d018d6e/air-jordan-3-retro-older-shoes-ggSDPD.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c626e530-a198-424d-b852-f04b2e0a093e/air-jordan-3-retro-older-shoes-ggSDPD.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0d813bd7-f14b-43a9-9519-80f0eb8a0b42/air-jordan-3-retro-older-shoes-ggSDPD.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3b31914e-f1a3-4c1e-a373-69ba37805081/air-jordan-3-retro-older-shoes-ggSDPD.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/862d5697-f22c-4b1c-b282-073e0ef163b3/air-jordan-3-retro-older-shoes-ggSDPD.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb05b5-23b7-46a4-a0f3-58fe1b911d18/air-jordan-3-retro-older-shoes-ggSDPD.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aef09f3-c605-4fb8-9958-f9f53fa6eef1/air-jordan-3-retro-older-shoes-ggSDPD.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "12",
            "name": "Air Jordan 1 Mid Sneaker School",
            "slug": "air-jordan-1-mid-sneaker-school",
            "description": "What records will you break in your J's? This update to the classic AJ1 tells the story of MJ as a two-headed monster, capable of offensive and defensive feats. Now it's your turn to control the court.",
            "excerpt": "What records will you break in your J's? This update to the classic AJ1 tells the story of MJ as a two-headed monster.",
            "price": 1699000,
            "tags": ["School", "Sneaker", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04c0dd1d-398d-45df-a9ae-d399fa050e3a/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f564a1c3-f3a8-4efd-88e0-53e245537899/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a1ef4a5f-6fba-4375-91b3-3b7460288281/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/788ad7ae-374b-4670-9249-4cbca6624b52/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e5418fc-275e-47ed-80eb-6125adf336b5/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2385927b-7516-4971-9c62-fd770f09cb76/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6439689-b599-4c6e-8df7-db32b05c6285/air-jordan-1-mid-sneaker-school-older-shoes-bFR6D5.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "13",
            "name": "Nike Air Force 1 '07 LX",
            "slug": "nike-air-force-1-07-lx",
            "description": "Take your love for the game with you wherever you go. These kicks put a Chinese New Year spin on a hoops classic with a dragon-scaled Swoosh logo and an iridescent sparkle. Of course, we kept the same era-echoing '80s construction and hidden Nike Air units you know and love for that legendary AF-1 feel. Go ahead, slip into a slam dunk.",
            "excerpt": "Take your love for the game with you wherever you go.",
            "price": 2099000,
            "tags": ["LX", "Force", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0314ecb4-a96e-4b0a-81a6-d61ecaef7cab/air-force-1-07-lx-shoes-mj705n.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f9e4f30-990a-4130-bdc1-633ae386d463/air-force-1-07-lx-shoes-mj705n.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/826575b7-4c6e-4edd-bb17-4ebf3b0d446e/air-force-1-07-lx-shoes-mj705n.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/71a4d9dc-8163-4f4e-a3ff-16c81eae3b8f/air-force-1-07-lx-shoes-mj705n.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26f6b091-c2ec-4f92-88bb-4b8564ffefcf/air-force-1-07-lx-shoes-mj705n.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be8ced3f-7a10-40df-8531-8faa615085c3/air-force-1-07-lx-shoes-mj705n.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c35f8e7-4dcb-45a4-9bb8-f2e9a57ecffd/air-force-1-07-lx-shoes-mj705n.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "14",
            "name": "Nike Air Force 1 '07",
            "slug": "nike-air-force-1-07",
            "description": "Score major style points with this legendary hoops classic. Crossing hardwood comfort with off-court flair, this AF-1 pairs smooth leather overlays with subtle design details for a nothing-but-net look. Hidden Air units and durable, era-echoing '80s construction add the comfort you know and love.",
            "excerpt": "Score major style points with this legendary hoops classic.",
            "price": 1909000,
            "tags": ["Nike", "Force", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/871ea72c-a2f4-493c-a6f4-3be31a86c73b/air-force-1-07-shoes-dpNPj1.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8f86f1d-1deb-436b-80ed-84591c436c9d/air-force-1-07-shoes-dpNPj1.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6f34922c-3ce7-4efd-9af9-6e3ca5dc20ab/air-force-1-07-shoes-dpNPj1.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f1e9c861-1e4c-4236-aab8-125a8b73cd08/air-force-1-07-shoes-dpNPj1.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a5a5a54-fba5-4e05-8b6e-a4d27c5526e4/air-force-1-07-shoes-dpNPj1.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa0c54ab-23ef-46dd-971e-49da8456dfe5/air-force-1-07-shoes-dpNPj1.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/707306b7-6131-4562-bb51-f4856f5baf77/air-force-1-07-shoes-dpNPj1.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "15",
            "name": "Nike Air Force 1 '07",
            "slug": "nike-air-force-1-07",
            "description": "This hoops original gives 'fresh air' a whole new meaning. The breezy canvas, embroidered details and a bouquet of spring colours bring summertime vibes to what you already know and love: Nike Air cushioning, classic construction and style for days.",
            "excerpt": "This hoops original gives 'fresh air' a whole new meaning.",
            "price": 1729000,
            "tags": ["Nike", "SE", "Force"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c466aeb3-da92-4c61-82a4-9bd1df9e2bd5/air-force-1-07-shoes-nCJ6Wb.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7398adb6-7c8b-4c84-bd95-67d5eb02e67b/air-force-1-07-shoes-nCJ6Wb.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d4b3fe2-3c7d-4abd-822b-3d00ea46acf2/air-force-1-07-shoes-nCJ6Wb.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee5d437-9c91-492e-9995-cab3e148dba0/air-force-1-07-shoes-nCJ6Wb.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a50fc46-6ff1-4717-b64c-72ec5af0b8ec/air-force-1-07-shoes-nCJ6Wb.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2aeb57d2-0bfa-4d2d-ba03-2a51e768b89a/air-force-1-07-shoes-nCJ6Wb.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27abf601-eae3-4722-b0c2-dc0f7834d0a8/air-force-1-07-shoes-nCJ6Wb.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "16",
            "name": "Nike Air Force 1 '07'",
            "slug": "nike-air-force-1-07",
            "description": "Comfortable, durable and timeless—it's number 1 for a reason. The '80s construction pairs with classic colours for style that tracks whether you're on court or on the go.",
            "excerpt": "Comfortable, durable and timeless—it's number 1 for a reason.",
            "price": 1729000,
            "tags": ["Nike", "Force", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29a93e9c-0279-47c8-abc3-9f7a2f475c88/air-force-1-07-shoes-0XGfD7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/54316a10-6793-4b6f-a815-345d3f6b941c/air-force-1-07-shoes-0XGfD7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4474fa3e-a2be-444d-b447-12ee1c26ec9b/air-force-1-07-shoes-0XGfD7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a01db1d3-b82c-4d71-b278-43d98438e6e8/air-force-1-07-shoes-0XGfD7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da13854d-38b3-419f-ac9e-963e2745c0fa/air-force-1-07-shoes-0XGfD7.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/37bafd8b-d1cf-446b-9dca-18d86238bd47/air-force-1-07-shoes-0XGfD7.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "17",
            "name": "Nike Air Force 1 '07'",
            "slug": "nike-air-force-1-07",
            "description": "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction gets a metamorphous refresh inspired by the merging of digital and physical worlds. Jewel-like hardware, holographic accents and a special JDI dubrae add the finishing touch so you can take centre stage in style.",
            "excerpt": "Comfortable, durable and timeless—it's number 1 for a reason.",
            "price": 1909000,
            "tags": ["Nike", "Force", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eab83ea8-f453-4029-883c-578d1f0463ac/air-force-1-07-shoes-kv14Mh.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6bee8bc-25db-4746-9c41-5d9e43a4d040/air-force-1-07-shoes-kv14Mh.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b010972f-7bf2-426c-933e-7137a9e40a42/air-force-1-07-shoes-kv14Mh.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99ed42d1-bff2-4cdb-b5ca-5fd792489db2/air-force-1-07-shoes-kv14Mh.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5bbdd73a-7bb3-4aa8-8ed9-c855c30eeb86/air-force-1-07-shoes-kv14Mh.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e53fbb70-1157-4958-9bc0-056bf5ea614e/air-force-1-07-shoes-kv14Mh.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f4f7175-1502-4027-a614-fb2e59cb7f08/air-force-1-07-shoes-kv14Mh.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "18",
            "name": "Nike Air Force 1 '07'",
            "slug": "nike-air-force-1-07",
            "description": "The radiance lives on in the Air Force 1 '07. This b-ball icon puts a fresh spin on what you know best: durable materials, rich colours and the perfect amount of flash to make you shine.",
            "excerpt": "The radiance lives on in the Air Force 1 '07.",
            "price": 1729000,
            "tags": ["Nike", "Force", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd7e8c76-9cb5-48ed-b401-6756d315b334/air-force-1-07-shoes-kZwncs.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3ae15dc-ede4-496b-bf36-fa92998eb763/air-force-1-07-shoes-kZwncs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e24c2bd6-bc39-4c08-82c1-12d7c63458d6/air-force-1-07-shoes-kZwncs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e24c2bd6-bc39-4c08-82c1-12d7c63458d6/air-force-1-07-shoes-kZwncs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40807f92-c96f-4df4-90af-59dadc711720/air-force-1-07-shoes-kZwncs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0762756a-ca94-4394-aed3-3875fd724a5e/air-force-1-07-shoes-kZwncs.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1902d463-9fb5-496b-af95-9bb4397e0076/air-force-1-07-shoes-kZwncs.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "19",
            "name": "Nike Air Trainer 1",
            "slug": "nike-air-trainer-1",
            "description": "Just like the original we released in '87, these essential everyday sneakers let you move around town without a glitch. Packed with the retro details you love (check out the forefoot strap and layered midsole), they keep the legend alive and well. So, where will you take your Trainers?",
            "excerpt": "Just like the original we released in '87, these essential everyday sneakers let you move around town without a glitch.",
            "price": 2999000,
            "tags": ["Nike", "Trainer", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d53349e8-bcda-48b3-9ac2-73edf973be2e/air-trainer-1-shoes-fZXcl5.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f1de170-9710-4f1c-90c0-65e0d4d18ad5/air-trainer-1-shoes-fZXcl5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ab997d9-9503-47a0-981c-a88a7615f5f2/air-trainer-1-shoes-fZXcl5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2a96a59a-f99a-4e5c-8938-af9bfed49575/air-trainer-1-shoes-fZXcl5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1a5d5bb4-f9ed-4f0c-ad3c-d1da861c8d10/air-trainer-1-shoes-fZXcl5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93106f66-da5f-48d1-b3a5-e77e4eebb7b9/air-trainer-1-shoes-fZXcl5.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/986c1686-0673-472f-b2c0-9c171d80ce28/air-trainer-1-shoes-fZXcl5.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "20",
            "name": "Nike Air Pegasus '89",
            "slug": "nike-air-pegasus-89",
            "description": "The Nike Air Pegasus '89 blends retro style with modern comfort. The encapsulated Air unit helps cushion each step, while a knit upper with suede overlays supports all-day wear.",
            "excerpt": "The Nike Air Pegasus '89 blends retro style with modern comfort.",
            "price": 2999000,
            "tags": ["Nike", "Trainer", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3d94252-8896-4c1d-85be-5549f5e27a52/air-pegasus-89-shoes-QZqpqP.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/048d7bfe-8b48-4f7b-92c8-9c557c152b4a/air-pegasus-89-shoes-QZqpqP.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b4ed99f3-bf5e-4a8e-a430-227afb82f21a/air-pegasus-89-shoes-QZqpqP.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b33fa17a-a57b-48d8-b964-f724748ead55/air-pegasus-89-shoes-QZqpqP.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b5bea4cf-a460-4a08-a410-09476648f328/air-pegasus-89-shoes-QZqpqP.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2903bdf3-e9a1-42b8-8bac-d1312c6404ef/air-pegasus-89-shoes-QZqpqP.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4d3d75c-49cd-4c0f-8818-e4466d6d3d08/air-pegasus-89-shoes-QZqpqP.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          },
          {
            "_id": "21",
            "name": "Nike Air Force 1 Shadow",
            "slug": "nike-air-force-1-shadow",
            "description": "The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold, new look.",
            "excerpt": "The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design.",
            "price": 1649000,
            "tags": ["Nike", "Trainer", "Jordan"],
            "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/320153db-1f0f-40bc-8ba2-14bd358aa168/air-force-1-shadow-shoes-hzR7HR.png",
            "images": [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3bac114-d9b0-46d6-9fb3-5218cf4679c7/air-force-1-shadow-shoes-hzR7HR.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cde470dc-ea87-4944-acda-730295d083fa/air-force-1-shadow-shoes-hzR7HR.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fff6c56d-a921-4366-aa7b-80862da46878/air-force-1-shadow-shoes-hzR7HR.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/edf20797-17d7-4425-8fef-269f9985b9da/air-force-1-shadow-shoes-hzR7HR.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68606064-2337-4185-b703-3327b38c0d29/air-force-1-shadow-shoes-hzR7HR.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0924d3ec-e07a-4875-9fc0-a4c2a06b909d/air-force-1-shadow-shoes-hzR7HR.png"
            ],
            "createdAt": "2024-01-10T12:32:37.477Z",
            "updatedAt": "2024-01-10T19:39:46.154Z"
          }
        ]

    return (
        <>
            <div className="flex flex-wrap mb-5 w-11/12 m-auto">
                {products.length == 0 ?
                    (
                        Array.from({ length: 8 }).map((_ : any, index : number) => (
                            <Skeleton key={index} />
                        ))
                    )
                    : (
                        products.map((product : any, index : number) => (
                            <CardProduct key={index} product={product} />
                        ))
                    )}
            </div>
        </>
    )
}