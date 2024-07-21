// import { TextRequest } from "@/notion-sdk/core/types/notion-api.types";

// interface ConvertNotionImageStatic {
//   (
//     image:
//       | {
//           type: "external";
//           external: {
//             url: TextRequest;
//           };
//         }
//       | null
//       | {
//           type: "file";
//           file: {
//             url: string;
//             expiry_time: string;
//           };
//         }
//       | null,
//     pageId: string,
//     userId: string,
//     width?: number
//   ): string;
// }

// /**
//  * Convert Notion Static Image
//  * @param notionImage  Notion Image
//  * @param pageId  Page Id
//  * @param userId  User Id
//  * @param width  Width in px (optional, but recommended)
//  * @returns   Static Image URL
//  * @example
//  * convertNotionImageStatic( notionImage, pageId, userId, width )
//  * @description
//  * This function converts a Notion API Image Signed URL to a Static Image URL.
//  */
// const convertNotionImageStatic: ConvertNotionImageStatic = (
//   notionImage,
//   pageId,
//   userId,
//   width
// ) => {
//   if (!notionImage || !userId || !pageId) {
//     return "";
//   }

//   // If cover type is external, return the URL without any modifications
//   if (notionImage.type === "external") {
//     return notionImage.external.url;
//   }

//   const url = notionImage.file.url;

//   if (!url) {
//     return "";
//   }

//   // Step 1: Clear and remove all queries
//   const [baseUrl] = url.split("?");

//   // Step 2: Extract spaceId from the URL
//   const spaceIdMatch = baseUrl.match(/amazonaws\.com\/([^\/]+)/);
//   const spaceId = spaceIdMatch ? spaceIdMatch[1] : "";

//   // Step 3: Replace all slashes with "%2F" and colons with "%3A" in the URL
//   const encodedUrl = baseUrl.replace(/:/g, "%3A").replace(/\//g, "%2F");

//   // Step 4: Add the following queries to the end
//   const queries = [
//     "table=block",
//     `id=${pageId}`,
//     `spaceId=${spaceId}`,
//     width ? `width=${width}` : undefined,
//     `userId=${userId}`,
//     "cache=v2",
//   ].join("&");

//   // Step 5: Append "https://www.notion.so/image/" to the beginning of the URL
//   const staticImageUrl = `https://www.notion.so/image/${encodedUrl}?${queries}`;

//   return staticImageUrl;
// };

// export default convertNotionImageStatic;
