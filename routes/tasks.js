const express = require('express');
const router = express.Router();


const Task = require('../models/Task');


router.post('/',(req,res,next)=>{
  const task = new Task(req.body);
  const promise = task.save();
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

//Hangi statusta kaç tane task olduğunu gösterir
router.get('/count',(req,res)=>{
  const promise = Task.aggregate([
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


//taskları ve contributorsunu yazar
router.get('/',(req,res)=>{
  const promise = Task.aggregate([
    {
      $lookup:{
        from:'users',
        localField:'contributors',
        foreignField:'_id',
        as:'contributors'
      }
    },
    {
      $unwind:{
        path:'$contributors'
      }
    },
    {
      $group:{
        _id:{
          _id:'$_id',
          content:'$content',
          title:'$title',
          status:'$status',
          date:'$date',
		  dueDate:'$dueDate',
		  createdBy:'$createdBy'
        },
        contributors:{
        $push:'$contributors'
    }
  }
  },
    {
      $project:{
        _id:'$_id._id',
        content:'$_id.content',
        title:'$_id.title',
        status:'$_id.status',
        date:'$_id.date',
		dueDate:'$_id.dueDate',
        createdBy: '$_id.createdBy',
        contributors: '$contributors',
      }
    }
  ]);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})
//todo
router.put('/update/:id',(req,res)=>{
  const promise = Task.findByIdAndUpdate(req.params.id,req.body);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

//Task silme
router.delete('/delete/:id',(req,res)=>{
  const promise = Task.findByIdAndRemove(req.params.id)
  promise.then((count)=>{
    if(count==null)
      res.json({status:'0'})//zaten silinmiş ise 0
    res.json({status:'1'})
  }).catch((err)=>{
    res.json(err)
  })
})

module.exports = router;
