﻿using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.Service
{
    public class StudentService
    {
        private IBaseRepository<Student> repository;
        public StudentService()
        {
            repository=new BaseRepository<Student>();
        }

        public bool Add(Student student)
        {
            student.Id = Guid.NewGuid().ToString();
            student.CreatedBy = "Admin";
            student.Created = System.DateTime.Now;
            student.Modified = System.DateTime.Now;
            student.ModifiedBy = "Admin";
            return repository.Add(student);
        }
        public List<StudentGridViewModel> Search(StudentRequestModel request)
        {
            IQueryable<Student> students = this.repository.Get();
            Expression<Func<Student, bool>> nameExpression = x => x.Name.ToLower().Contains(request.Name.ToLower());
            Expression<Func<Student, bool>> phoneExpression = x => x.Phone.ToLower().Contains(request.Phone.ToLower());

            if (!string.IsNullOrWhiteSpace(request.Name))
            {
               
                students = students.Where(nameExpression);
            }

            if (!string.IsNullOrWhiteSpace(request.Phone))
            {
               
                students = students.Where(phoneExpression);
            }

            students = students.OrderBy(x => x.Modified);

            if (!string.IsNullOrWhiteSpace(request.OrderBy))
            {
                if (request.OrderBy.ToLower() == "name")
                {
                    students = request.IsAscending ? students.OrderBy(x => x.Name) : students.OrderByDescending(x => x.Name);
                }

                if (request.OrderBy.ToLower() == "phone")
                {
                    students = request.IsAscending ? students.OrderBy(x => x.Phone) : students.OrderByDescending(x => x.Phone);
                }
            }

            students = students.Skip((request.Page - 1) * request.PerPageCount ).Take(request.PerPageCount);

            List<StudentGridViewModel> list = students.ToList().ConvertAll(
                student => new StudentGridViewModel(student)
                );
        
            return list;
        }

        public StudentDetailViewModel Detail(string id)
        {
            var student = repository.GetDetail(id);
            if (student==null)
            {
                throw new ObjectNotFoundException();
            }
            return new StudentDetailViewModel(student);

        }
    }
}
