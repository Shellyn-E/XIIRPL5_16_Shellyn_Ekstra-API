const Extracurricular = require("../models/extracurricular");

module.exports = {
  //get all extracurricular
  index: async (req, res) => {
    try {
      const extracurriculars = await Extracurricular.find();
      if (extracurriculars.length > 0) {
        res.status(200).json({
          status: true,
          data: extracurriculars,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data is Still Empty",
        });
      }
    } catch (error) {
      //   console.log(error);
      res.status(400).json({ success: false });
    }
  },

  //get an extracurricular
  show: async (req, res) => {
    try {
      const extracurricular = await Extracurricular.findById(req.params.id);
      res.json({
        status: true,
        data: extracurricular,
        method: req.method,
        url: req.url,
        message: "Success Get Data",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  //post an extracurricular
  store: async (req, res) => {
    try {
      const extracurricular = await Extracurricular.create(req.body);
      res.status(200).json({
        status: true,
        data: extracurricular,
        method: req.method,
        url: req.url,
        message: "Success Post a Data",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },

  //update an extracurricular
  update: async (req, res) => {
    try {
      const extracurricular = await Extracurricular.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.json({
        status: true,
        data: extracurricular,
        method: req.method,
        url: req.url,
        message: "Success Update a Data",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  //delete an extracurricular
  delete: async (req, res) => {
    try {
      await Extracurricular.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Success Dalete a Data",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};
