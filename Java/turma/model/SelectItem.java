package com.instituicao.turma.model;

import java.io.Serializable;

public class SelectItem implements Serializable {

	private static final long serialVersionUID = 293762744353839658L;

	private String label;

	private Object value;

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

}
