enum Voltages {
    '110v' = 110,
    '115v' = 115,
    '120v' = 120,
    '220v' = 220,
    '230v' = 230,
    '240v' = 240,
}

enum BTUs {
    '9K' = 9000,
    '12K' = 12000,
    '18K' = 18000,
    '24K' = 24000,
    '27K' = 27000,
    '36K' = 36000,
    '48K' = 48000,
    '60K' = 60000,
}

enum DIYGenerations {
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
}

enum Couplers {
    '14-12' = 1412,
    '38-58' = 3858,
}

type VoltageTypes = keyof typeof Voltages;
type BTUTypes = keyof typeof BTUs;
type DIYGenerationTypes = keyof typeof DIYGenerations;
type CouplerTypes = keyof typeof Couplers;

interface LinesetData {
    [key: string]: {
        length: number,
        ver: CouplerTypes,
        c?: boolean
    }
}

export interface CoverageArea { min?: number, max: number }

interface ComponentData {
    [key: string]: {
        zones: number,
        voltage: VoltageTypes,
        btu: BTUTypes,
        coverageArea: CoverageArea,
        hidden?: boolean,
        legacy?: boolean,
        available?: boolean,
    }
}

interface couplerData {
    [key: string]: {
        coupler: CouplerTypes,
    }
}

export interface EquipmentData {
    condenser: ComponentData,
    airHandler: ComponentData,
    lineSet: LinesetData,
    coupler: couplerData,
}

export interface ProductData {
    id?: number,
    brand_name: string,
    series: string,
    model: string,
    gtin: string,
    upc: number,
    series_ext: string,
    unit_type: string,
    equipment_type?: string
    cased?: string
    configuration?: string
    country_of_origin?: string
    short_description: string
    long_description: string
    works_with?: string
    feature_list: string
    seer?: string
    seer2?: string
    max_seer?: string
    eer?: string
    eer2?: string
    eer_part_load?: string
    cop_47?: string
    cop_47_part_load?: string
    hspf?: string
    hspf4: number,
    hspf5: number,
    hspf2?: string,
    hspf24: number,
    hspf25: number,
    afue?: string,
    cfm?: string,
    tonnage?: string,
    cooling_capacity_BTU: number,
    heating_capacity_BTU: number,
    fuel_type?: string,
    btu_input?: string,
    btu_output?: string,
    voltage_V: string,
    phase: number,
    cycle_Hz: number,
    stage?: string,
    max_fuse_breaker_a: number,
    min_circuit_ampacity_a: number,
    mount_type?: string,
    color: string,
    color_family?: string,
    rated_load?: string,
    full_load?: string,
    max_coverage_area: number,
    zone_capacity: number,
    refrigerant_type: string,
    refrigerant_volume_oz?: string,
    decibel_rating_dba: number,
    decibel_rating_low_dba: number,
    decibel_rating_high_dba: number,
    air_flow_direction?: string,
    number_of_speeds?: string,
    oscillation?: string,
    number_of_burners?: string,
    inverter?: string,
    min_ambient_cool_F?: string,
    min_ambient_heat_F?: string,
    drain_connection_size?: string,
    gas_connection_size?: string,
    lineset_included?: string,
    line_set_length?: string,
    max_lineset_length_ft?: string,
    lineset_fitting_type?: string,
    liquid_line_fitting?: string,
    liquid_line_size?: string,
    suction_line_fitting?: string,
    suction_line_size?: string,
    control_type?: string,
    compressor_motor_type?: string,
    condenser_fan_motor_type?: string,
    condenser_fan_motor_hp?: string,
    condenser_fan_motor_rpm?: string,
    blower_motor_type?: string,
    blower_motor_hp?: string,
    blower_motor_speeds?: string,
    blower_motor_rpm?: string,
    filter_type: string,
    filter_size?: string,
    heat_exchanger_type?: string,
    ignition_type?: string,
    vent_connector?: string,
    metering_device?: string,
    auxiliary_heater_included?: string,
    auxiliary_heater_available?: string,
    auxiliary_heater_sizes?: string,
    lp_kit_included?: string,
    lp_kit_available?: string,
    low_voltage_compensation: string,
    overload_protection: string,
    adjustable_thermostat: string,
    fan_only_option: string,
    quiet_mode: string,
    sleep_mode: string,
    auto_cool: string,
    wifi_compatibility: string,
    app_compatibility: string,
    works_with_ios: string,
    works_with_android: string,
    remote_control_included: string,
    ul_recognized?: string,
    ul_listed: string,
    csa_listed: string,
    csa_certified?: string,
    etl_listed: string,
    etl_certified?: string,
    iso_certified?: string,
    leed_certified?: string,
    ashrae_compliant?: string,
    energy_star_compliant: string,
    energy_star_certified: string,
    ahri_certified: string,
    registered_warranty: string,
    base_warranty: string,
    registered_parts_warranty: string,
    base_parts_warranty: string,
    registered_compressor_warranty: string,
    base_compressor_warranty: string,
    registered_heat_exchanger_warranty?: string,
    base_heat_exchanger_warranty?: string,
    registered_remote_warranty: string,
    base_remote_warranty: string,
    registered_labor_warranty: string,
    base_labor_warranty: string,
    has_batteries: string,
    contains_electronics: string,
    contains_chemicals: string,
    contains_aerosol: string,
    contains_compressed_gas: string,
    proposition_65_warning: string,
    restricted_states?: string,
    net_depth_in: number,
    net_height_in: number,
    net_width_in: number,
    net_weight: number,
    gross_depth_in: number,
    gross_height_in: number,
    gross_width_in: number,
    gross_weight_lbs: number,
    freight_class?: string,
    image_1: string,
    image_2: string,
    image_3: string,
    image_4: string,
    image_5: string,
    image_6: string,
    image_7: string,
    image_8?: string,
    image_9?: string,
    image_10?: string,
    video_1?: string,
    video_2?: string,
    video_3?: string,
    video_4?: string,
    video_5?: string,
    video_6?: string,
    brochure: string,
    install_manual: string,
    specs?: string,
    owner_manual?: string,
    remote_manual?: string,
    technical_manual?: string,
    service_manual: string,
    warranty_doc: string,
    accessory_manual_1?: string,
    accessory_manual_2?: string,
    accessory_manual_3?: string,
    french_brochure?: string,
    french_install_manual?: string,
    french_owner_manual?: string,
    french_remote_manual?: string,
    french_tech_manual?: string,
    french_service_manual?: string,
    french_warranty_document?: string,
    french_accessory?: string,
    spanish_brochure?: string,
    spanish_install_manual?: string,
    spanish_owner_manual?: string,
    spanish_remote?: string,
    spanish_tech_manual?: string,
    spanish_service_manual?: string,
    spanish_warranty?: string,
    spanish_accessory?: string,
    accessory_manual_4?: string,
    ahri_certs: string,
    energy_guide_certs: string,
    other_certs?: string,
    misc_doc4?: string,
    url: string,
    active: string,
    date_created: string,
    last_updated_date: string,
}