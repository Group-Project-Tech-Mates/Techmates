const Project = require('../../src/models/Project');

exports.createProject = async (req, res) => {
  try {
    const { name, description, user } = req.body;

    if (!name || !description || !user) {
      return res.status(400).json({ message: 'Name, description, and user are required.' });
    }

    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('user');
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(204).json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};