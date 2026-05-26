{activeTab === "madenler_enerji" && (
            <motion.div
              key="madenler_enerji"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="dt-wrapper"
            >
              <div className="dt-layout-grid" style={{ minHeight: '500px' }}>
                {/* Sidebar Navigation */}
                <div className="dt-sidebar">
                  <div className="imap-select-wrap">
                    <label>Maden & Enerji Haritası Seçin</label>
                    <select
                      className="imap-select"
                      value={madenMapType}
                      onChange={(e) => setMadenMapType(e.target.value)}
                    >
                      <option value="uranyum_toryum">Uranyum ve Toryum</option>
                      <option value="asfaltit">Asfaltit</option>
                      <option value="dogalgaz">Doğal Gaz</option>
                      <option value="petrol">Petrol</option>
                      <option value="linyit">Linyit</option>
                    </select>
                  </div>
                  
                  <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                    <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Lejant</h4>
                    {MINING_MAP_DATA[madenMapType].legend.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                        {item.type === 'circle' && (
                          <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: item.color }}></span>
                        )}
                        {item.type === 'factory' && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={item.color}>
                            <path d="M22 22H2V20H22V22ZM2 18V6L9 10V6L16 10V6L22 10V18H2Z" />
                          </svg>
                        )}
                        {item.type === 'pumpjack' && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={item.color}>
                            <path d="M16 3H8V5H14.1L12.7 7.8L9.8 6.4L5.4 15H2V17H11.5L16 8H19V21H21V6H16V3ZM8 17H6V21H8V17Z" />
                          </svg>
                        )}
                        {item.type === 'cylinder' && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={item.color}>
                            <path d="M12 2C8.69 2 6 3.34 6 5V19C6 20.66 8.69 22 12 22C15.31 22 18 20.66 18 19V5C18 3.34 15.31 2 12 2ZM12 4C14.76 4 16 5 16 5C16 5 14.76 6 12 6C9.24 6 8 5 8 5C8 5 9.24 4 12 4ZM12 20C9.24 20 8 19 8 19V17.21C9.17 17.7 10.53 18 12 18C13.47 18 14.83 17.7 16 17.21V19C16 19 14.76 20 12 20Z" />
                          </svg>
                        )}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="dt-content" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="imap-product-badge" style={{ alignSelf: 'flex-start', marginBottom: '1rem', backgroundColor: 'var(--card-bg)' }}>
                    {MINING_MAP_DATA[madenMapType].title}
                  </div>
                  <div className="imap-map-container" style={{ flex: 1, position: 'relative', background: 'var(--card-bg)', borderRadius: '12px', padding: '1rem' }}>
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 2300,
                        center: [35.2433, 38.9637]
                      }}
                      width={800}
                      height={400}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#e2e8f0"
                              stroke="#e2e8f0"
                              strokeWidth={0.5}
                              style={{
                                default: { outline: "none" },
                                hover: { outline: "none", fill: "#cbd5e1" },
                                pressed: { outline: "none" }
                              }}
                            />
                          ))
                        }
                      </Geographies>
                      
                      {MINING_MAP_DATA[madenMapType].markers.map((marker, index) => (
                        <Marker key={index} coordinates={marker.coordinates}>
                          <g style={{ cursor: 'pointer' }} onMouseEnter={() => setClickedProv(marker.name)} onMouseLeave={() => setClickedProv(null)}>
                            {marker.icon === 'circle' && (
                              <circle r={5} fill={marker.color} stroke="#fff" strokeWidth={1.5} cy={marker.offsetY || 0} />
                            )}
                            {marker.icon === 'factory' && (
                              <g transform={`translate(-8, ${(marker.offsetY || 0) - 8}) scale(0.7)`}>
                                <path d="M22 22H2V20H22V22ZM2 18V6L9 10V6L16 10V6L22 10V18H2Z" fill={marker.color} />
                              </g>
                            )}
                            {marker.icon === 'pumpjack' && (
                              <g transform={`translate(-8, ${(marker.offsetY || 0) - 8}) scale(0.7)`}>
                                <path d="M16 3H8V5H14.1L12.7 7.8L9.8 6.4L5.4 15H2V17H11.5L16 8H19V21H21V6H16V3ZM8 17H6V21H8V17Z" fill={marker.color} />
                              </g>
                            )}
                            {marker.icon === 'cylinder' && (
                              <g transform={`translate(-8, ${(marker.offsetY || 0) - 8}) scale(0.7)`}>
                                <path d="M12 2C8.69 2 6 3.34 6 5V19C6 20.66 8.69 22 12 22C15.31 22 18 20.66 18 19V5C18 3.34 15.31 2 12 2ZM12 4C14.76 4 16 5 16 5C16 5 14.76 6 12 6C9.24 6 8 5 8 5C8 5 9.24 4 12 4ZM12 20C9.24 20 8 19 8 19V17.21C9.17 17.7 10.53 18 12 18C13.47 18 14.83 17.7 16 17.21V19C16 19 14.76 20 12 20Z" fill={marker.color} />
                              </g>
                            )}
                            {marker.label !== "" && (
                              <text
                                textAnchor="middle"
                                y={(marker.offsetY || 0) + 14}
                                style={{ fill: "#334155", fontSize: "10px", fontWeight: "600", pointerEvents: "none" }}
                              >
                                {marker.name}
                              </text>
                            )}
                          </g>
                        </Marker>
                      ))}
                    </ComposableMap>

                    {/* Interactive Tooltip / Detail overlay */}
                    <AnimatePresence>
                      {clickedProv && (
                        <motion.div 
                          className="imap-tooltip"
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--card-bg)', zIndex: 10 }}
                        >
                          <div className="imap-tooltip-title">{clickedProv}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </div>
            </motion.div>
          )}
