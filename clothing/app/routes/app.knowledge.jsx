// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// // import type {ResourceListProps} from '@shopify/polaris';
// import Polaris from '@shopify/polaris';
// const { Page,List,Card, Text, Button, Stack ,Banner,Layout,LegacyCard,
//   ResourceList,
//   Avatar,
//   ResourceItem,
//   } = Polaris;

// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4';
// const supabase = createClient(supabaseUrl, supabaseKey);

// function Knowledge() {
//   const [pdfs, setPdfs] = useState([]);
//   // const [deleteSuccess, setDeleteSuccess] = useState(false);

//   // Fetch all PDFs from Supabase
//   useEffect(() => {
//     async function fetchPDFs() {
//       const { data, error } = await supabase.storage.from('pdfstore').list('store1', {
//         sortBy: { column: 'created_at', order: 'desc' }
//       });
//       console.log("Fetched Data:", data); // Check what data is received
//       console.log("Error:", error); // Identify any errors
//       if (error) {
//         console.error('Error fetching PDFs:', error);
//       } else {
//         setPDFs(data);
//       }
//     }
      

//     fetchPDFs();
//   }, []);
//   const handleViewPDF = (url) => {
//     window.open(url, '_blank');
//   };


//   const handleDeletePDF = async (filePath) => {
//     const { error } = await supabase.storage.from('pdfstore').remove([filePath]);
//     if (error) {
//       console.error('Error deleting PDF:', error);
//     } else {
//       setPDFs(pdfs.filter(pdf => `store1/${pdf.name}` !== filePath)); // Update local state
//       alert('PDF deleted successfully!');
//     }
//   };
  
  

  
//   function ResourceListExample() {
//     const [selectedItems, setSelectedItems] = useState<
//       ResourceListProps['selectedItems']
//     >([]);
  
//     const resourceName = {
//       singular: 'PDF',
//       plural: 'PDFs',
//     };
  
//     const items = [
      

//     ];
  
  
//     return (
//       <LegacyCard>
//         <ResourceList
//           resourceName={resourceName}
//           items={items}
//           renderItem={renderItem}
//           selectedItems={selectedItems}
//           onSelectionChange={setSelectedItems}
//           promotedBulkActions={promotedBulkActions}
//           bulkActions={bulkActions}
//           resolveItemId={resolveItemIds}
//         />
//       </LegacyCard>
//     );
  
//     function renderItem(item: typeof items[number], _: string, index: number) {
//       const {id, url, name, location} = item;
//       const media = <Avatar customer size="md" name={name} />;
  
//       return (
//         <ResourceItem
//           id={id}
//           url={url}
//           media={media}
//           sortOrder={index}
//           accessibilityLabel={`View details for ${name}`}
//         >
//           <Text variant="bodyMd" fontWeight="bold" as="h3">
//             {name}
//           </Text>
//           <div>{location}</div>
//         </ResourceItem>
//       );
//     }
  
//     function resolveItemIds({id}: {id: string}) {
//       return id;
//     }
//   }
//   return (
//     <Page title="Manage PDFs">
//       <Layout>
//         {pdfs.map((pdf, index) => (
//           <Layout.Section key={index}>
//             <Card sectioned>
//               <Stack alignment="center" distribution="equalSpacing">
//                 <Text>{pdf.name}</Text>
//                 <Button onClick={() => handleViewPDF(`https://snnbayevmgzqejabjycv.supabase.co/storage/v1/object/public/pdfstore/store1/${pdf.name}`)}>View PDF</Button>
//                 <Button destructive onClick={() => handleDeletePDF(`store1/${pdf.name}`)}>Delete PDF</Button>
//               </Stack>
//             </Card>
//           </Layout.Section>
//         ))}
//       </Layout>
//     </Page>
//   );
// }

// export default Knowledge;












// import React from 'react';

// import {
//   BlockStack,
//   Button,
//   ButtonGroup,
//   Card,
//   InlineStack,
//   List,
//   Text,
// } from '@shopify/polaris';
// import {PlusIcon} from '@shopify/polaris-icons';

// function Knowledge() {
//   // const { pdfUrl } = usePdfUrl();
//   return (
//     <Card roundedAbove="sm">
//       <BlockStack gap="200">
//         <Text as="h2" variant="headingSm">
//           PDF 
//         </Text>
//         <BlockStack gap="200">
//           <Text as="h3" variant="headingSm" fontWeight="medium">
//             Review current uploaded PDF
//           </Text>
          
//           {/* <List>
//             <List.Item>1 × Oasis Glass, 4-Pack</List.Item>
//             <List.Item>1 × Anubis Cup, 2-Pack</List.Item>
//           </List> */}
//         </BlockStack>
//         <InlineStack align="end">
//           <ButtonGroup>
            
//             <Button
//               // icon={PlusIcon}
//               variant="primary"
//               onClick={() => {}}
//               accessibilityLabel="Create shipping label"
//             >
//               View PDF
//             </Button>
//           </ButtonGroup>
//         </InlineStack>
//       </BlockStack>
//     </Card>
//   );
// }
// export default Knowledge








// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Card, Text, Button, BlockStack } from '@shopify/polaris';

// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4'; // Use your actual Supabase Key
// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Key:', supabaseKey);


// function Knowledge() {
//   const [latestPDF, setLatestPDF] = useState(null);

//   // Fetch the latest PDF uploaded from Supabase
//   useEffect(() => {
//     const fetchLatestPDF = async () => {
//       const { data, error } = await supabase.storage.from('pdfstore').list('store1', {
//         sortBy: { column: 'created_at', order: 'desc' }, // Sorting by creation time
//         limit: 1 // Limits to only the most recent file
//       });
//       if (error) {
//         console.error('Error fetching latest PDF:', error);
//         return;
//       }
//       const latestFile = data[0];
//   if (latestFile) {
//     setLatestPDF({
//       name: latestFile.name,
//       url: `https://snnbayevmgzqejabjycv.supabase.co/storage/v1/object/public/pdfstore/store1/${latestFile.name}`
//     });
//   }
//     };

//     fetchLatestPDF();
//   }, []);

//   return (
//     <Card sectioned>
//       <BlockStack spacing="tight">
//         <Text variant="headingMd">Latest Uploaded PDF</Text>
//         {latestPDF ? (
//           <>
//             <Text>Name: {latestPDF.name}</Text>
//             <Button url={latestPDF.url} external>View PDF</Button>
//           </>
//         ) : (
//           <Text>Loading latest PDF...</Text>
//         )}
//       </BlockStack>
//     </Card>
//   );
// }

// export default Knowledge;

















// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Card, Text, BlockStack, LegacyCard, Layout, Page , EmptyState, Button, Banner} from '@shopify/polaris';

// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4'; // Use your actual Supabase Key
// const supabase = createClient(supabaseUrl, supabaseKey);

// function Knowledge() {
//   const [latestPDF, setLatestPDF] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);
//   const bucket_name = 'pdfstore1'; // Make sure this matches exactly with what's in your Supabase console

//   // Fetch the latest PDF uploaded from Supabase
//   useEffect(() => {
//     const fetchLatestPDF = async () => {
//       const { data, error } = await supabase.storage.from(bucket_name).list('store', {
//         sortBy: { column: 'created_at', order: 'desc' }, // Sorting by creation time
//         limit: 1 // Limits to only the most recent file
//       });
//       if (error) {
//         console.error('Error fetching latest PDF:', error);
//         return;
//       }
//       if (data && data.length > 0) {
//       const latestFile = data[0];
      
//         setLatestPDF({
//           name: latestFile.name,
//           url: `https://snnbayevmgzqejabjycv.supabase.co/storage/v1/object/public/pdfstore1/store/${latestFile.name}`,

//           // url: `https://snnbayevmgzqejabjycv.supabase.co/storage/v1/object/public/pdfstore1/store/${latestFile.name}`,
//           id: latestFile.id
//         });
//       }
//     };

//     fetchLatestPDF();
//   }, [deleteSuccess]);
//   const deletePDF = async () => {
//     if (latestPDF) {
//       // Use the full path instead of just the ID
//       const filePath = `store/${latestPDF.name}`;
//       const { error } = await supabase.storage.from(bucket_name).remove([latestPDF.id]);
//       if (error) {
//         console.error('Error deleting PDF:', error);
//         return;
//       }
//       setDeleteSuccess(true); // Indicate successful deletion
//       setLatestPDF(null); // Clear the latest PDF as it's now deleted
//     }
//   };
//   // Inside the openPDF function
// const openPDF = () => {
//   if (latestPDF) {
//     const iframe = document.createElement('iframe');
//     iframe.src = latestPDF.url;
//     iframe.style.width = '100%';
//     iframe.style.height = '500px'; // Set the height as needed
//     iframe.setAttribute('sandbox', 'allow-scripts'); // Set the sandbox attribute with allow-scripts permission
//     document.body.appendChild(iframe);
//   }
// };

//   // const openPDF = () => {
//   //   if (latestPDF) {
//   //     window.open(latestPDF.url, '_blank');
//   //   }
//   // };
//   return (
//     <Page>
//     <LegacyCard sectioned>
      
//     <Card sectioned>
//     <EmptyState
//         heading="FAQ PDF REVIEW PAGE"
        
//         image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
//       >
       
      
//       <BlockStack gap={500}>
//         <Text variant="headingMd">Latest Uploaded PDF</Text>
//         {latestPDF ? (
//           <>
//             <Text>Name: {latestPDF.name}</Text>
//             {/* <a href={latestPDF.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//               <Text style={{ color: '#007ace', cursor: 'pointer' }}>View PDF</Text>
//             </a> */}
//             <Button onClick={openPDF}>View PDF</Button> 
//             <Button onClick={deletePDF} destructive>Delete PDF</Button> 
//           </>
//         ) : (
//           <Text>Loading latest PDF...</Text>
//         )}
//       </BlockStack>
//       </EmptyState>
//     </Card>
//     {deleteSuccess && (
//           <Banner status="success">PDF deleted successfully!</Banner> /* Show a success message after deletion */
        
//     )}
//     </LegacyCard>
//     </Page>
//   );
// }

// export default Knowledge;






// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Card, Text, BlockStack, LegacyCard, Layout, Page, EmptyState, Button, Banner } from '@shopify/polaris';

// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4'; // Use your actual Supabase Key
// const supabase = createClient(supabaseUrl, supabaseKey);

// function Knowledge() {
//   const [latestPDF, setLatestPDF] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);

//   useEffect(() => {
//     fetchLatestPDF();
//   }, [deleteSuccess]);

//   async function fetchLatestPDF() {
//     const bucket_name = 'pdfstore1'; // Adjust according to your bucket setup in Supabase
//     const { data, error } = await supabase.storage.from(bucket_name).list('store', {
//       sortBy: { column: 'created_at', order: 'desc' },
//       limit: 1
//     });

//     if (error) {
//       console.error('Error fetching latest PDF:', error);
//       return;
//     }

//     if (data && data.length > 0) {
//       const latestFile = data[0];
//       const url = await fetchPDFUrl(latestFile);
//       setLatestPDF({
//         name: latestFile.name,
//         url: url,
//         id: latestFile.id
//       });
//     }
//   }

//   async function fetchPDFUrl(latestFile) {
//     const filePath = `store/${latestFile.name}`;
//     const { data, error } = await supabase.storage.from('pdfstore1').getPublicUrl(filePath);
//     if (error) {
//       console.error('Error fetching PDF URL:', error);
//       return null;
//     }
//     return data.publicUrl;
//   }

//   async function deletePDF() {
//     if (latestPDF) {
//       const { error } = await supabase.storage.from('pdfstore1').remove([latestPDF.id]);
//       if (error) {
//         console.error('Error deleting PDF:', error);
//         return;
//       }
//       setDeleteSuccess(true);
//       setLatestPDF(null);
//     }
//   }

//   const openPDF = () => {
//     if (latestPDF && latestPDF.url) {
//       const iframe = document.createElement('iframe');
//       iframe.src = latestPDF.url;
//       iframe.style.width = '100%';
//       iframe.style.height = '500px';
//       iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
//       document.body.appendChild(iframe);
//     }
//   };

//   return (
//     <Page>
//       <LegacyCard sectioned>
//         <Card sectioned>
//           <EmptyState
//             heading="FAQ PDF REVIEW PAGE"
//             image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
//           >
//             <BlockStack gap={500}>
//               <Text variant="headingMd">Latest Uploaded PDF</Text>
//               {latestPDF ? (
//                 <>
//                   <Text>Name: {latestPDF.name}</Text>
//                   <Button onClick={openPDF}>View PDF</Button>
//                   <Button onClick={deletePDF} destructive>Delete PDF</Button>
//                 </>
//               ) : (
//                 <Text>Loading latest PDF...</Text>
//               )}
//             </BlockStack>
//           </EmptyState>
//         </Card>
//         {deleteSuccess && (
//           <Banner status="success">PDF deleted successfully!</Banner>
//         )}
//       </LegacyCard>
//     </Page>
//   );
// }

// export default Knowledge;








// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Card, Text, BlockStack, LegacyCard, Layout, Page , EmptyState, Button, Banner} from '@shopify/polaris';

// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4'; // Replace with your actual Supabase key
// const supabase = createClient(supabaseUrl, supabaseKey);

// function Knowledge() {
//   const [latestPDF, setLatestPDF] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);
//   const [signedUrl, setSignedUrl] = useState('');

//   // Fetch the latest PDF uploaded from Supabase
//   useEffect(() => {
//     const fetchLatestPDF = async () => {
//       const { data, error } = await supabase.storage.from('pdfstore1').list('store', {
//         sortBy: { column: 'created_at', order: 'desc' },
//         limit: 1
//       });

//       if (error) {
//         console.error('Error fetching latest PDF:', error);
//         return;
//       }

//       if (data && data.length > 0) {
//         const latestFile = data[0];
//         const { signedUrl, error: signedUrlError } = await supabase.storage
//           .from('pdfstore1')
//           .createSignedUrl(`store/${latestFile.name}`, 60 * 60);

//         if (signedUrlError) {
//           console.error('Error creating signed URL:', signedUrlError);
//           return;
//         }

//         setLatestPDF({
//           name: latestFile.name,
//           url: signedUrl,
//           id: latestFile.id
//         });
//         setSignedUrl(signedUrl);
//       }
//     };

//     fetchLatestPDF();
//   }, [deleteSuccess]);

//   const deletePDF = async () => {
//     if (latestPDF) {
//       const { error } = await supabase.storage.from('pdfstore1').remove([`store/${latestPDF.name}`]);
//       if (error) {
//         console.error('Error deleting PDF:', error);
//         return;
//       }
//       setDeleteSuccess(true);
//       setLatestPDF(null);
//       setSignedUrl('');
//     }
//   };
//   const openPDF = () => {
//     if (signedUrl) {
//       const iframe = document.createElement('iframe');
//       iframe.src = signedUrl;
//       iframe.style.width = '100%';
//       iframe.style.height = '500px';
//       iframe.setAttribute('sandbox', 'allow-scripts');
//       document.body.appendChild(iframe);
//     }
//   };

//   // const openPDF = () => {
//   //   if (latestPDF) {
//   //     const iframe = document.createElement('iframe');
//   //     iframe.src = latestPDF.url;
//   //     iframe.style.width = '100%';
//   //     iframe.style.height = '500px';
//   //     iframe.setAttribute('sandbox', 'allow-scripts');
//   //     document.body.appendChild(iframe);
//   //   }
//   // };

//   return (
//     <Page>
//       <LegacyCard sectioned>
//         <Card sectioned>
//           <EmptyState
//             heading="FAQ PDF REVIEW PAGE"
//             image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
//           >
//             <BlockStack gap={500}>
//               <Text variant="headingMd">Latest Uploaded PDF</Text>
//               {latestPDF ? (
//                 <>
//                   <Text>Name: {latestPDF.name}</Text>
//                   <Text>URL: <a href={signedUrl} target="_blank" rel="noopener noreferrer">{signedUrl}</a></Text>
//                   {/* <Button onClick={openPDF}>View PDF</Button> */}
//                   <Button primary onClick={openPDF}>View PDF</Button>
//                   <Button onClick={deletePDF} destructive>Delete PDF</Button>
//                 </>
//               ) : (
//                 <Text>Loading latest PDF...</Text>
//               )}
//             </BlockStack>
//           </EmptyState>
//         </Card>
//         {deleteSuccess && <Banner status="success">PDF deleted successfully!</Banner>}
//       </LegacyCard>
//     </Page>
//   );
// }

// export default Knowledge;









// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Card, Text, BlockStack, LegacyCard, Layout, Page, EmptyState, Button, Banner } from '@shopify/polaris';
// // Initialize Supabase client
// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4';
// // Replace with your actual Supabase key
// const supabase = createClient(supabaseUrl, supabaseKey);
// function Knowledge() {
//   const [latestPDF, setLatestPDF] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);
//   const [signedUrl, setSignedUrl] = useState('');
//   // Fetch the latest PDF uploaded from Supabase
//   useEffect(() => {
//     const fetchLatestPDF = async () => {
//       const { data, error } = await supabase.storage.from('pdfstore1').list('store', {
//         sortBy: { column: 'created_at', order: 'desc' },
//         limit: 1
//       });
//       if (error) {
//         console.error('Error fetching latest PDF:', error);
//         return;
//       }
//       if (data && data.length > 0) {
//         const latestFile = data[0];
//         const { signedUrl, error: signedUrlError } = await supabase.storage
//           .from('pdfstore1')
//           .createSignedUrl(`store/${latestFile.name}`, 60 * 60);
//         if (signedUrlError) {
//           console.error('Error creating signed URL:', signedUrlError);
//           return;
//         }
//         console.log('Signed URL:', signedUrl); // Add this line
//         setLatestPDF({
//           name: latestFile.name,
//           url: signedUrl,
//           id: latestFile.id
//         });
//         setSignedUrl(signedUrl);
//       }
//     };
//     fetchLatestPDF();
//   }, [deleteSuccess]);
//   const deletePDF = async () => {
//     if (latestPDF) {
//       const { error } = await supabase.storage.from('pdfstore1').remove([`store/${latestPDF.name}`]);
//       if (error) {
//         console.error('Error deleting PDF:', error);
//         return;
//       }
//       setDeleteSuccess(true);
//       setLatestPDF(null);
//       setSignedUrl('');
//     }
//   };
//   const openPDF = () => {
//     if (latestPDF && latestPDF.name) {
//       const url = 'https://snnbayevmgzqejabjycv.supabase.co/storage/v1/object/sign/pdfstore1/store/${latestPDF.name}';
//       const iframe = document.createElement('iframe');
//       iframe.src = url;
//       iframe.style.width = '100%';
//       iframe.style.height = '500px';
//       iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin'); // Make sure this is safe to use
//       document.body.appendChild(iframe);
//     }
//   };
  
//   // const openPDF = () => {
//   //   if (signedUrl) {
//   //     const iframe = document.createElement('iframe');
//   //     iframe.src = signedUrl;
//   //     iframe.style.width = '100%';
//   //     iframe.style.height = '500px';
//   //     iframe.setAttribute('sandbox', 'allow-scripts');
//   //     document.body.appendChild(iframe);
//   //   }
//   // };
//   return (
//     <Page>
//       <LegacyCard sectioned>
//         <Card sectioned>
//           <EmptyState
//             heading="FAQ PDF REVIEW PAGE"
//             image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
//           >
//             <BlockStack gap={500}>
//               <Text variant="headingMd">Latest Uploaded PDF</Text>
//               {latestPDF ? (
//                 <>
//                   <Text>Name: {latestPDF.name}</Text>
//                   <Text>URL: <a href={signedUrl} target="_blank" rel="noopener noreferrer">{signedUrl}</a></Text>
//                   <Button primary onClick={openPDF}>View PDF</Button>
//                   <Button onClick={deletePDF} destructive>Delete PDF</Button>
//                 </>
//               ) : (
//                 <Text>Loading latest PDF...</Text>
//               )}
//             </BlockStack>
//           </EmptyState>
//         </Card>
//         {deleteSuccess && <Banner status="success">PDF deleted successfully!</Banner>}
//       </LegacyCard>
//     </Page>
//   );
// }
// export default Knowledge;













import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, Text, BlockStack, LegacyCard, Page, EmptyState, Button, Banner } from '@shopify/polaris';

// Initialize Supabase client
const supabaseUrl = "https://bkcqubibxwqeqkzyjdhr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3F1YmlieHdxZXFrenlqZGhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODk4MTc1NywiZXhwIjoyMDI0NTU3NzU3fQ.SudIwbDwg6GDM-jWEDH2Ifb05SJlAz7WuUlBWiEa9ew";
const supabase = createClient(supabaseUrl, supabaseKey);

function Knowledge() {
  const [latestPDF, setLatestPDF] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [signedUrl, setSignedUrl] = useState('');

  useEffect(() => {
    async function fetchLatestPDF() {
      const { data, error } = await supabase.storage.from('pdfstore1').list('store', {
        sortBy: { column: 'created_at', order: 'desc' },
        limit: 1
        // console.log(data)
      });
      console.log(data)
      if (error) {
        console.error('Error fetching latest PDF:', error);
      
        return;
      }
      if (data.length > 0) {
        const latestFile = data[0];
        try {
          const { signedUrl, error: signedUrlError } = await supabase.storage
            .from('pdfstore1')
            .createSignedUrl(`store/${latestFile.name}`, 60 * 60);
          if (signedUrlError) {
            console.error('Error creating signed URL:', signedUrlError);
            return;
          }
          setLatestPDF({
            name: latestFile.name,
            url: signedUrl,
            id: latestFile.id
          });
        } catch (err) {
          console.error('Error with signed URL creation:', err);
        }
      }
    }
    fetchLatestPDF();
  }, [deleteSuccess]);
  const fetchSignedUrl = async (fileName) => {
    const response = await fetch('/.netlify/functions/getSignedUrl', {
      method: 'POST',
      body: JSON.stringify({ fileName }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch signed URL');
    }
  
    const { signedUrl } = await response.json();
    return signedUrl;
  };
  
  const handleViewPdf = async () => {
    try {
      const fileName = 'pdfstore1/store/{latestPDF}.pdf'; // Your PDF path in storage
      const signedUrl = await fetchSignedUrl(fileName);
      // You can now use this URL to embed the PDF in an iframe or as a direct download link
      console.log('Signed URL:', signedUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const deletePDF = async () => {
    if (latestPDF) {
      const { error } = await supabase.storage.from('pdfstore1').remove([`store/${latestPDF.name}`]);
      if (error) {
        console.error('Error deleting PDF:', error);
        return;
      }
      setDeleteSuccess(true);
      setLatestPDF(null);
      setSignedUrl('');
    }
  };

  const openPDF = () => {
    if (latestPDF && latestPDF.url) {
      const iframe = document.createElement('iframe');
      iframe.src = latestPDF.url;
      iframe.style.width = '100%';
      iframe.style.height = '500px';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      document.body.appendChild(iframe);
    }
  };

  return (
    <Page>
      <LegacyCard sectioned>
        <Card sectioned>
          <EmptyState
            heading="FAQ PDF REVIEW PAGE"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <BlockStack gap={500}>
              <Text variant="headingMd">Latest Uploaded PDF</Text>
              {latestPDF ? (
                <>
                  <Text>Name: {latestPDF.name}</Text>
                  <Text>URL: <a href={latestPDF.url} target="_blank" rel="noopener noreferrer">View PDF</a></Text>
                  <Button primary onClick={openPDF}>View PDF</Button>
                  <Button onClick={deletePDF} destructive>Delete PDF</Button>
                </>
              ) : (
                <Text>Loading latest PDF...</Text>
              )}
            </BlockStack>
          </EmptyState>
        </Card>
        {deleteSuccess && <Banner status="success">PDF deleted successfully!</Banner>}
      </LegacyCard>
    </Page>
  );
}

export default Knowledge;