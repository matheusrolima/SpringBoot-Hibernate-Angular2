package com.instituicao.usuario.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.instituicao.usuario.model.Usuario;
import com.instituicao.usuario.service.UsuarioService;

@Component
@CrossOrigin(origins = "http://localhost:4200")
@Path("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;

	@POST
	@Path("/buscarUsuario")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getUsuarioByNomeAndPassword(Usuario usuario) {

		Usuario us = usuarioService.getUsuarioByNomeAndPassword(usuario.getUsuario(), usuario.getSenha());

		if (us != null) {

			return Response.ok(us).build();
		}

		return Response.status(Status.NOT_FOUND).build();
	}

}
