# Basic Structure

1. `src` is the folder where all the code resides
2. There should not be any reason to change any file outside the `src` folder
3. Inside `src` folder there are several folders that will house the code for the project
4. The only folder of concern which will have all the text is `src/content`
5. For images the folder is `src/images`
6. In most scenarios, there shouldn't arise a situation where any file outside these two sub-folders needs to be modified

# Using GraphCMS

## Invite

1. GraphCMS will contain all our data that will be used to generate content and pages
2. I have sent an invite on the id `it@mahakoshal.in`

## Publishing Data

1. Any data that is shown on the website has to be `published` and not just saved
2. Any data that is not required for the time being, but is not to be deleted can be `un-published`

## All Schemas

1. The following are the schemas and their use-cases (in-alphabetical order)
    1. Career - To create jobs in the jobs table on the careers page
    2. Certificate - To add images and info about the certificates on the about us page
    3. Footer - `Do not edit or delete` Schema has one row only whose id is mapped, so do not delete the row. This generates all the content for the footer
    4. Nav - Generates links for the Nav `Do not edit`
    5. NewsArticle - Create article cards on the landing page
    6. PageData - Create content for various pages
    7. Product - All the products and their info will be stored here
    8. ProductType - `Do not edit` Used to generate the nav and other classifications
    9. Statistic - Adds the stats on the landing page
    10. Team - Adds images and description of the team members on the about us page
    11. Testimonial - Adds testimonial data on the landing page

# Hero

-   Hero section is also referred to as the banner section. The first section of the landing page.

1. To change the Hero Image, just add a new image in the `src/images/Hero` folder and remove the previous image
2. To change the content of the Hero section, you will need to modify`src/content/hero.md` file.

    1. If you want to edit the "Title" or the "Sub-Title" simply edit the text inside the inverted commas
    2. The orignal structure of the file is

        ```json
        ---
        type: "hero"
        heroTitle: "Innovative Refactory Solutions"
        heroSubTitle: "Serving clients since 1969"
        ---
        ```

    3. Please only edit the text inside the inverted commas to change the `heroTitle` and the `heroSubTitle`

# Clients

-   The section below the banner which has the scroll for clients

1. To add or remove a client simply add or remove the image from the folder `src/images/Clients`

# Statistics

-   The section inside the blue background with the various stats of our company.

1. To change the stats, go to graphCMS and edit or add content in the `Statistic` schema
2. The limit is added for 6 records. So only the first 6 records that are published will be shown here.
3. The fields are
    1. Title - Ex. 10K
    2. Description - Ex. countries
    3. Paragraph - In a little more than 50 years of doing bussines we produced 500 tons of bricks

# Featured News

-   The section which contains all the news articles

1. To add, remove or change the news articles, you will need to use the `NewsArticle` schema in graphCMS
2. Since this creates a card on the landing page, there is an additional validation added on the character count of the title and description field. This is done for the sole purpose that the cards look uniform.
3. The character limit can be easily removed.
4. The fields are
    1. Cover Image - Upload a cover image for the article card
    2. Title - What does the article talk about - Character limit - 50 to 80 words
    3. Description - Additional info to the reader - Character limit - 80 to 150 words
    4. ArticleUrl - The link to the article

# Testimonial

-   The section for reading testimonial of the various customers

1. To add, remove or change the testimonials, you will need to use the `Testimonial` schema in graphCMS
2. Since this creates a card on the landing page, there is an additional validation added on the character count of the Testimonial Text field. This is done for the sole purpose that the cards look uniform.
3. The character limit can be easily removed.
4. The fields are
    1. Author - Name of the customer
    2. Designation - Designation of the customer
    3. Location - Location of the customer
    4. TestimonialText - Testimonial given by the customer, Character limit - 80 to 200 characters

# Products

-   All the products in the grid, and the pages for individual products

1. To add, remove or change the products, you will need to use the `Product` schema in graphCMS
2. The fields are
    1. ProductName - Name of the product
    2. ProductCategory - Chose between shaped and un-shaped. This field cannot be made mandatory due to limitations of graphCMS, but ensure that this is always filled.
    3. ProductImages - Images of the product. You have the option to drag and position the images in any order you like. The first image will be used as a cover image for the cards.
    4. CardDescription - This is a small description that will go on the product cards. There is a character limit of 200 characters to ensure that all cards look the same
    5. Description - The big description that is displayed on the product page itself, next to the images
    6. ProductLink - `Auto-generated` but editable.
    7. ProductNotes - Shown below the productTable in the products page
    8. ProductTable - The table shown on the Products Page
    9. DownloadData - link to the file that can be downloaded when clicked on the download data button on the products page

## Adding Product Images

1. Click on the `Add existing ProductImages` button

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fba71147-205e-4fb2-8cc9-42b9f3a7f7c2/Untitled.png)

2. Click on `upload` on the popup (as seen in the screenshot), And then `select files to upload`
3. Select all the files you want to upload and click on `upload` once more
4. After the upload is done, this is how the images will look like

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1cada67-b4b3-4a97-82b6-1bb39c6ddc23/Untitled.png)

5. You can use the the "grab" icon to re-arrange the images. The first image will be used as the cover image for the product card

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af06a8b1-c298-4962-b813-e2408e62e24b/Untitled.png)

6. Save and publish

## Adding ProductTable

1. Open a excel or google sheet to first create a table. This makes it easy to edit the table

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75b7ac13-f768-41de-9993-1f2eaf8a65da/Untitled.png)

2. Note that only the first row will be treated as the header. And merged columns would not work. So, un-merge all columns before proceeding
3. Copy the filled cells only and paste it in the `productTable` field

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b21cb580-a460-447c-ae67-a1188760da79/Untitled.png)

4. You can paste as many tables as you prefer here.
5. Save and publish.

## Download Data file

1. The url used can be a drive link
2. Just paste the link to the actual file and it should open as expected
