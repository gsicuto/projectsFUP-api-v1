const Student = require('../models/Student');
const ApplicationError = require('../errors/ApplicationError');


class StudentRepository {
  constructor(StudentModel) {
    this.Student = StudentModel;
  }

  async getAll() {
    try {
      const students = await this.Student.find().populate('project');
      return students;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async getOne(id) {
    try {
      const student = await this.Student.findById(id).populate('project');

      return student;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async create(newStudent) {
    try {
      const student = new this.Student(newStudent);

      await student.save();
      return student;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async deleteOne(id) {
    try {
      await this.Student.findByIdAndDelete(id);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async updateOne(updateObject, id) {
    try {
      const updatedStudent = await this.Student.findByIdAndUpdate(
        id,
        updateObject,
        { new: true },
      );
      return updatedStudent;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }
}

module.exports = new StudentRepository(Student);
