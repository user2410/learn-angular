const express   = require('express');
const router    = express.Router();

const mockArticles = [
    {
        id: 1,
        title: 'First Article',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar leo id molestie pellentesque. Pellentesque pulvinar volutpat placerat. Integer eget leo id felis tincidunt tristique in ut ipsum. Cras sit amet augue quis dolor imperdiet aliquet. Duis blandit arcu vitae ipsum tristique, eu fermentum nibh vulputate. Aliquam malesuada ullamcorper turpis, et malesuada dolor feugiat quis. Morbi eleifend at nibh vitae auctor. Pellentesque a malesuada lectus. Etiam porta eros id justo gravida, et egestas sem laoreet. Nullam finibus nunc ut arcu congue gravida. Pellentesque placerat ipsum lorem, in imperdiet enim rhoncus et</p><p>Nulla sagittis venenatis nisl sit amet posuere. Praesent facilisis leo vitae metus rutrum, eget ornare quam finibus. Donec nec erat sit amet nibh vestibulum malesuada non in lacus. Praesent bibendum laoreet enim, sed varius augue fermentum in. Quisque eu risus massa. Pellentesque non feugiat enim, in consequat eros. Proin quis nulla semper, condimentum dui viverra, volutpat erat. Nulla vel erat ac velit rutrum luctus. Suspendisse id eleifend sem. Praesent pulvinar aliquam condimentum. Sed quis egestas quam. Suspendisse vitae congue nisl. Donec vitae massa est. Vestibulum viverra mi nibh, quis ultrices dolor aliquet vitae. Aliquam accumsan mauris libero, eget lobortis lacus pretium in. Fusce quis dapibus sapien.</p>',
        description: 'First article! It\'s great, please read it',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://images-cdn.9gag.com/photo/avAWONO_700b.jpg'
    },
    
    {
        id: 2,
        title: 'Second Article',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar leo id molestie pellentesque. Pellentesque pulvinar volutpat placerat. Integer eget leo id felis tincidunt tristique in ut ipsum. Cras sit amet augue quis dolor imperdiet aliquet. Duis blandit arcu vitae ipsum tristique, eu fermentum nibh vulputate. Aliquam malesuada ullamcorper turpis, et malesuada dolor feugiat quis. Morbi eleifend at nibh vitae auctor. Pellentesque a malesuada lectus. Etiam porta eros id justo gravida, et egestas sem laoreet. Nullam finibus nunc ut arcu congue gravida. Pellentesque placerat ipsum lorem, in imperdiet enim rhoncus et</p><p>Nulla sagittis venenatis nisl sit amet posuere. Praesent facilisis leo vitae metus rutrum, eget ornare quam finibus. Donec nec erat sit amet nibh vestibulum malesuada non in lacus. Praesent bibendum laoreet enim, sed varius augue fermentum in. Quisque eu risus massa. Pellentesque non feugiat enim, in consequat eros. Proin quis nulla semper, condimentum dui viverra, volutpat erat. Nulla vel erat ac velit rutrum luctus. Suspendisse id eleifend sem. Praesent pulvinar aliquam condimentum. Sed quis egestas quam. Suspendisse vitae congue nisl. Donec vitae massa est. Vestibulum viverra mi nibh, quis ultrices dolor aliquet vitae. Aliquam accumsan mauris libero, eget lobortis lacus pretium in. Fusce quis dapibus sapien.</p>',
        description: 'Also a great article',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://images-cdn.9gag.com/photo/avAWONO_700b.jpg'
    }
];

router.get('/', (req, res)=>{
    res.send(mockArticles);
})

router.get('/:key', (req, res)=>{
    res.send(mockArticles.filter(article => article.key === req.params.key)[0]);
})

module.exports  = router;