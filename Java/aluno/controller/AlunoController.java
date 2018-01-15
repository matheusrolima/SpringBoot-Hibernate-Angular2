package com.instituicao.aluno.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.instituicao.aluno.model.Aluno;
import com.instituicao.aluno.service.AlunoService;
import com.instituicao.turma.model.SelectItem;

@Component
@CrossOrigin(origins = "http://localhost:4200")
@Path("/aluno")
public class AlunoController {


	@Autowired
	AlunoService alunoService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/alunos")
	public List<SelectItem> getAllAlunos() {
		List<Aluno> list = alunoService.getAllAlunos();
		return list.stream().map(i -> {
			SelectItem select = new SelectItem();
			select.setLabel(i.getNome());
			select.setValue(i);
			return select;
		}).collect(Collectors.toList());
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/todosAlunos")
	public Response getAllAluno() {
		List<Aluno> list = alunoService.getAllAlunos();
		return Response.ok(list).build();
	}

	@GET
	@Path("buscarCpf/{cpf}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAlunoByCPF(@PathParam("cpf") String cpf) {
		Aluno aluno = alunoService.getAlunoByCPF(cpf);
		return Response.ok(aluno).build();
	}

	@GET
	@Path("buscarCidade/{cidade}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAlunoByCidade(@PathParam("cidade") String cidade) {
		List<Aluno> aluno = alunoService.getAlunoByCidade(cidade);
		return Response.ok(aluno).build();
	}

	@POST
	@Path("/cadastrarAluno")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response Cadastrar(Aluno aluno) {

		if (alunoService.getAlunoByCPF(aluno.getCpf()) != null) {
			
			return Response.status(Status.CONFLICT).build();
		}

		aluno = alunoService.addAluno(aluno);
		return Response.ok(aluno.getId()).build();
	}

	@DELETE
	@Path("/deletar/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteAluno(@PathParam("id") Long id) {
		alunoService.deleteAluno(id);
		return Response.noContent().build();
	}

	@GET
	@Path("buscarId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAlunoById(@PathParam("id") Long id) {
		Aluno aluno = alunoService.getAlunoById(id);
		return Response.ok(aluno).build();
	}

	@PUT
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateAluno(Aluno aluno) {
		alunoService.updateAluno(aluno);
		return Response.ok(aluno).build();
	}
}
