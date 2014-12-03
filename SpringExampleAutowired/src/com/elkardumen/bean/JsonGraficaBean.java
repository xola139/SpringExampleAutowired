package com.elkardumen.bean;

import java.util.List;

public class JsonGraficaBean {
	private String name;
	private String type;
	private int pointInterval;
	private long pointStart;
	private boolean showInLegend;
	private Object data;
	private String color;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getPointInterval() {
		return pointInterval;
	}
	public void setPointInterval(int pointInterval) {
		this.pointInterval = pointInterval;
	}
	public long getPointStart() {
		return pointStart;
	}
	public void setPointStart(long pointStart) {
		this.pointStart = pointStart;
	}
	public boolean isShowInLegend() {
		return showInLegend;
	}
	public void setShowInLegend(boolean showInLegend) {
		this.showInLegend = showInLegend;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	
	
	
	
}
