const express = require('express');
const router = express.Router();


const Story = require('../models/Story');

router.get('/count',(req,res)=>{
  const promise = Story.aggregate([
    {
      $group:{
        _id:'$status',
        count:{$sum:1}
      }
    }
  ])
  promise.then((count)=>{
    res.json(count)
  }).catch((err)=>{
    res.json(err)
  })
})

router.post('/',(req,res,next)=>{
  const story = new Story(req.body)
  story.save((err,data)=>{
    if(err)
    next({message:'Story not found',code:'0'})
    res.json(data)
  })
})

router.get('/',(req,res,next)=>{
  const promise = Story.find({})
  promise.then((data) => {
    if(!data)
      next({message:'no data',code:5})
		res.json(data);
	}).catch((err) => {
		res.json(err);
	})
})
//Story Update


//Story silme
router.delete('/delete/:id',(req,res)=>{
  const promise = Story.findByIdAndRemove(req.params.id)
  promise.then((count)=>{
    if(count==null)
      res.json({status:'0'})//zaten silinmiş ise 0
    res.json({status:'1'})
  }).catch((err)=>{
    res.json(err)
  })
})

module.exports = router;