﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server.Data;

#nullable disable

namespace server.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.3");

            modelBuilder.Entity("server.Entities.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("TEXT");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("server.Entities.Service", b =>
                {
                    b.Property<int>("ServiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ServiceName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("ServiceId");

                    b.ToTable("Services");

                    b.HasData(
                        new
                        {
                            ServiceId = 1,
                            ServiceName = "Acrylic set"
                        },
                        new
                        {
                            ServiceId = 2,
                            ServiceName = "Acrylic fill"
                        },
                        new
                        {
                            ServiceId = 3,
                            ServiceName = "Dip powder"
                        },
                        new
                        {
                            ServiceId = 4,
                            ServiceName = "Pedicure"
                        },
                        new
                        {
                            ServiceId = 5,
                            ServiceName = "Shellac Manicure"
                        });
                });

            modelBuilder.Entity("server.Entities.Visit", b =>
                {
                    b.Property<int>("VisitId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CustomerId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("VisitedOn")
                        .HasColumnType("TEXT");

                    b.HasKey("VisitId");

                    b.ToTable("Visits");
                });

            modelBuilder.Entity("server.Entities.VisitService", b =>
                {
                    b.Property<int>("VisitServiceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ServiceId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VisitId")
                        .HasColumnType("INTEGER");

                    b.HasKey("VisitServiceId");

                    b.ToTable("VisitsServices");
                });
#pragma warning restore 612, 618
        }
    }
}
