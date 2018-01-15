package com.instituicao.config.hibernate.session;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;

public class HibernateSession {

    @PersistenceContext
	private EntityManager entityManager;

	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}

}
