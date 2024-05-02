// import React, { useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
// import { usePdfUrl } from './app';  // Adjust the path based on your directory structure

// import { Page, Card, DropZone, Stack, Thumbnail, Caption } from '@shopify/polaris';
// import Polaris from '@shopify/polaris';
// import '@shopify/polaris/build/esm/styles.css';

// const { Page, Card, DropZone, Stack, Thumbnail } = Polaris;


// import {NoteIcon} from '@shopify/polaris-icons';
// import {useState, useCallback} from 'react';

const supabaseUrl = "https://bkcqubibxwqeqkzyjdhr.supabase.co";
// const supabaseUrl = 'https://bkcqubibxwqeqkzyjdhr.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3F1YmlieHdxZXFrenlqZGhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODk4MTc1NywiZXhwIjoyMDI0NTU3NzU3fQ.SudIwbDwg6GDM-jWEDH2Ifb05SJlAz7WuUlBWiEa9ew";
const supabase = createClient(supabaseUrl, supabaseKey);

import {DropZone, LegacyStack, Thumbnail, Text, Button, Card, Page,
  Layout,
  BlockStack,
  LegacyCard,
  InlineGrid,
  Box,

  MediaCard,} from '@shopify/polaris';
import {NoteIcon} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';
// const LazyThumbnail = React.lazy(() => import('@shopify/polaris').then(module => ({ default: module.Thumbnail })));
function DropZoneExample() {
  const [files, setFiles] = useState([]);
  // const { setPdfUrl } = usePdfUrl();
 



  
  const handleDropZoneDrop = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Append new files to existing array
  }, []);

  const generateUniqueFileName = (originalFileName) => {
    const timestamp = new Date().getTime();
    const fileExtension = originalFileName.split('.').pop();
    return `pdf_${timestamp}.${fileExtension}`;
  };
  const handleSubmit = async () => {
    for (const file of files) {
      const uniqueFileName = generateUniqueFileName(file.name);
      const filePath = `store/${uniqueFileName}`;

      const { data, error } = await supabase.storage
        .from('pdfstore1')
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading file:', error.message);
        return;
      }
      console.log('File uploaded successfully:', data.Key);
    }
  };
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const file = files[0][0];
  //   console.log(file);
  //   console.log("uploading....");
    
  //   const { data1, error } = await supabase.storage
  //       .from('pdfstore')
  //       .upload("store1/pdf2.pdf", file, { upsert: true } );
  //   if (error) {
  //       console.error('Error uploading PDF:', error);
  //       return;
  //   }
  //   console.log("DOOOOOOOOOOOOOOOONE")
  // };

  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const fileUpload = !files.length && (
    <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
  );



  const uploadedFiles = files.length > 0 && (
    <LegacyStack vertical>
      {files.map((file, index) => (
        <LegacyStack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : NoteIcon}
          />
          <div>{file.name}</div>
        </LegacyStack>
      ))}
    </LegacyStack>
  );
  
    const SkeletonLabel = (props) => {
      return (
        <Box
          background="bg-fill-tertiary"
          minHeight="2rem"
          maxWidth="5rem"
          borderRadius="base"
          {...props}
        />
      );
    };
  
    return (
      <Page
        
        title="Frequently Asked Question"
        
         
     ><BlockStack gap="200">
      <Layout>
        <Layout.Section>
        <InlineGrid columns={{ xs: 1, md: "1fr 1fr" }} gap="100">
          <BlockStack gap="200">
            <Card roundedAbove="sm">
              {/* <BlockStack gap="400">
                <SkeletonLabel />
                <Box border="divider" borderRadius="base" minHeight="2rem" />
                <SkeletonLabel maxWidth="8rem" />
                <Box border="divider" borderRadius="base" minHeight="20rem" />
              </BlockStack> */}
              
      
        <MediaCard
      title="What are the benefits of using an AI Voice Agent Bot?"
      
      description="This Bot can provide quick responses, improve customer engagement, and reduce operational costs."
      
    >
   
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq3.png"
      />
    </MediaCard>
    
    
        <MediaCard
        title = "What multitasking capabilities does an AI Voice Agent Bot have?"
        
      description="AI Voice Agent Bots can handle customer support, information retrieval, sales and marketing, feedback collection, and enhance user experiences across multiple platforms."
      
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq1.png"
      />
    </MediaCard>
    
    
        <MediaCard
        title = "Can an AI Voice Agent bot make phone calls?"
        
      description="Some advanced AI Voice Agent bots are capable of making phone calls and conducting voice conversations."
      
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq2.png"
      />
    </MediaCard>
    
    
            </Card>
           
          </BlockStack>
          <BlockStack gap={200}>
            <Card roundedAbove="sm">
              {/* <BlockStack gap="400">
                <SkeletonLabel />
                <Box border="divider" borderRadius="base" minHeight="2rem" />
                <SkeletonLabel maxWidth="8rem" />
                <Box border="divider" borderRadius="base" minHeight="20rem" />
              </BlockStack> */}
              
        <MediaCard
      title="Can an AI Voice Agent bot understand multiple languages?"
      
      description="Yes, This AI Voice  bot are designed to understand and respond in multiple languages."

      
    >
      
   
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq4.png"
      />
    </MediaCard>
    
        <MediaCard
      title="Are AI Voice Agent bots secure?"
      
      description="Ai voice Agent bot are made secured as they are designed with security measures in place to protect user data."
      
    >
   
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq5.png"
      />
    </MediaCard>
  
        <MediaCard
      title="Can an AI Voice Agent bot replace human customer service?"
      
      description="This AI Bot can handle routine queries, but human intervention may still be needed for complex issues."
      
    >
   
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="/faq6.png"
      />
    </MediaCard>
    
            </Card>
            
            </BlockStack>
          
        </InlineGrid>
           <Card sectioned>
      <DropZone onDrop={handleDropZoneDrop}>
        {uploadedFiles || <DropZone.FileUpload actionHint="Accepts .gif, .jpg, .png, and .pdf files" />}
      </DropZone>
      <Button variant="primary" tone="critical" onClick={handleSubmit}>
      Submit
    </Button>
    
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Card>
    </Layout.Section>
        
      </Layout>
      </BlockStack>
    </Page>
    );
  } 

export default DropZoneExample;





// return (
  //   <Page>
  //   <ui-title-bar title="Frequently Asked Question">
      
  //   </ui-title-bar>
  //   <BlockStack gap="500">
  //     <Layout>
  //       <Layout.Section>

        
  //       <LegacyCard sectioned>
  //       <MediaCard
  //     title="What are the benefits of using a Ai voice Agent bot?"
      
  //     description="Ai voice Agent bot can provide quick responses, improve customer engagement, and reduce operational costs."
      
  //   >
   
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq3.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
  //   <LegacyCard sectioned>
  //       <MediaCard
  //       title = "How do I create a Ai voice Agent bot?"
        
  //     description="You can create a Ai voice Agent bot using various platforms and tools that offer Agent Bot development features."
      
  //   >
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq1.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
  //   <LegacyCard sectioned>
  //       <MediaCard
  //       title = "Can Ai voice Agent bot make phone calls?"
        
  //     description="Some advanced Ai voice Agent bot are capable of making phone calls and conducting voice conversations."
      
  //   >
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq2.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
  //   <LegacyCard sectioned>
  //       <MediaCard
  //     title="Can Ai voice Agent bot understand multiple languages?"
      
  //     description="Yes, many Ai voice Agent bot are designed to understand and respond in multiple languages"

      
  //   >
      
   
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq4.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
  //   <LegacyCard sectioned>
  //       <MediaCard
  //     title="Are Ai voice Agent bot secure?"
      
  //     description="Ai voice Agent bot can be secure if they are designed with security measures in place to protect user data."
      
  //   >
   
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq5.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
  //   <LegacyCard sectioned>
  //       <MediaCard
  //     title="Can Ai voice Agent bot replace human customer service?"
      
  //     description="Ai voice Agent bot can handle routine queries, but human intervention may still be needed for complex issues."
      
  //   >
   
  //     <img
  //       alt=""
  //       width="100%"
  //       height="100%"
  //       style={{
  //         objectFit: 'cover',
  //         objectPosition: 'center',
  //       }}
  //       src="/faq6.png"
  //     />
  //   </MediaCard>
  //   </LegacyCard>
        
  //   <Card sectioned>
  //     <DropZone onDrop={handleDropZoneDrop}>
  //       {uploadedFiles || <DropZone.FileUpload actionHint="Accepts .gif, .jpg, .png, and .pdf files" />}
  //     </DropZone>
  //     <Button variant="primary" tone="critical" onClick={handleSubmit}>
  //     Submit
  //   </Button>
    
  //     {/* <Button onClick={handleSubmit}>Submit</Button> */}
  //   </Card>
  //   </Layout.Section>
  //   </Layout>
  //     </BlockStack>
  //   </Page>
  // );


//   return (
//     <Card>
//       <DropZone onDrop={handleDropZoneDrop} variableHeight>
//         {uploadedFiles}
//         {fileUpload}
//       </DropZone>
//       <Button onClick={ handleSubmit }>Submit</Button>
//     </Card>
//   );
// }























// import { createClient } from '@supabase/supabase-js';
// import { useState, useCallback, useEffect } from 'react';
// import { AppProvider, Frame, Card, Button, DropZone, Thumbnail, LegacyStack } from '@shopify/polaris';
// import createApp from '@shopify/app-bridge';

// // import {DropZone, LegacyStack, Thumbnail, Text, Button, Card} from '@shopify/polaris';
// import {NoteIcon} from '@shopify/polaris-icons';

// // import { Page, Card, DropZone, Stack, Thumbnail, Caption } from '@shopify/polaris';
// // import Polaris from '@shopify/polaris';
// // import '@shopify/polaris/build/esm/styles.css';

// // const { Page, Card, DropZone, Stack, Thumbnail } = Polaris;


// // import {NoteIcon} from '@shopify/polaris-icons';
// // import {useState, useCallback} from 'react';

// const supabaseUrl = 'https://snnbayevmgzqejabjycv.supabase.co';
// // const supabaseUrl = 'https://bkcqubibxwqeqkzyjdhr.supabase.co';
// // const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubmJheWV2bWd6cWVqYWJqeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTI3MDMsImV4cCI6MjAyNzI4ODcwM30.U6Fcp9cWH6h46SD5hD_7MExrzbqJPnaCAXEFu5YxHv4';
// const supabase = createClient(supabaseUrl, supabaseKey);



// function DropZoneExample() {
//   const [appBridge, setAppBridge] = useState(null);
//   const [files, setFiles] = useState([]);
//   useEffect(() => {
//     if (window.ShopifyApp) {
//       const app = createApp({
//         apiKey: 'da939965f28661e5a4203a4724789938',
//         shopOrigin: window.ShopifyApp.shopOrigin,
//         forceRedirect: true,
//       });
//       setAppBridge(app);
//     }
//   }, []);

//   const handleDropZoneDrop = useCallback(
//     (_dropFiles, acceptedFiles, _rejectedFiles) =>
//       setFiles((files) => [acceptedFiles]),
//     [],
//   );

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const file = files[0][0];
//     console.log(file);
//     console.log("uploading....");
//     // console.log(file.File.Blob.Blob());
//     const { data1, error } = await supabase.storage
//         .from('pdfstore')
//         .upload("store1/pdf2.pdf", file );
//     if (error) {
//         console.error('Error uploading PDF:', error);
//         return;
//     }
//     console.log("DOOOOOOOOOOOOOOOONE")
//   };

//   const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

//   const fileUpload = !files.length && (
//     <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
//   );



//   const uploadedFiles = files.length > 0 && (
//     <LegacyStack vertical>
//       {files.map((file, index) => (
//         <LegacyStack alignment="center" key={index}>
//           <Thumbnail
//             size="small"
//             alt={file.name}
//             source={validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : NoteIcon}
//           />
//           <div>{file.name}</div>
//         </LegacyStack>
//       ))}
//     </LegacyStack>
//   );

//   return (
//     <AppProvider i18n={{}}>
//     {appBridge && <Frame>
//       <Card sectioned>
//         <DropZone onDrop={handleDropZoneDrop}>
//           {uploadedFiles}
//           {!files.length && <DropZone.FileUpload />}
//         </DropZone>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </Card>
//     </Frame>}
//   </AppProvider>
// );
// }
// export default DropZoneExample;

// {/* <iframe src="your-iframe-source.html" sandbox="allow-scripts"></iframe> */}