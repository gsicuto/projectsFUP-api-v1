const Project = require('../models/Project');
const ApplicationError = require('../errors/ApplicationError');

class ProjectRepository {
  constructor(ProjectModel) {
    this.Project = ProjectModel;
  }

  async getAll() {
    try {
      const projects = await this.Project.find().populate('students').populate('followUps');
      return projects;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async getByTitle(title) {
    try {
      const project = await this.Project.find({ title: new RegExp(title, 'i') }).populate('students').populate('followUps');
      return project;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async getOne(id, populate = false) {
    try {
      const project = populate
        ? await this.Project.findById(id).populate('students').populate('followUps') : await this.Project.findById(id);

      return project;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async create(newProject) {
    try {
      const project = new this.Project(newProject);

      await project.save();
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async deleteOne(id) {
    try {
      await this.Project.findByIdAndDelete(id);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async updateOne(updateObject, id) {
    try {
      const updatedProject = await this.Project.findByIdAndUpdate(
        id,
        updateObject,
        { new: true },
      );
      return updatedProject;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async addNewStudent(projectId, studentId) {
    try {
      const project = await this.getOne(projectId);
      project.students.push(studentId);
      await project.save();
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async removeStudent(projectId, studentId) {
    try {
      const project = await this.getOne(projectId);
      const index = project.students.findIndex(student => student === studentId);
      project.students.splice(index, 1);
      await project.save();
      return project;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }
}

module.exports = new ProjectRepository(Project);
