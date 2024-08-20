package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.AppointmentList;
import com.example.selfhelp.payload.AppointmentListDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface AppointmentListRepository extends JpaRepository<AppointmentList,Long> {
    List<AppointmentList> findByDoctorId(Long doctorId);

}
